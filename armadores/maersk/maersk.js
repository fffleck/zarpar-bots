const MaerskBot = require("./bot_maersk");
const CronJob = require("node-cron");

/**
 * Disponibiliza as informações do armador Maersk
 */
class Maersk {
  constructor(number_of_max_logins_without_block, number_max_of_browsers) {
    this.number_of_max_logins_without_block =
      number_of_max_logins_without_block;
    this.number_max_of_browsers = number_max_of_browsers; // depende do que o servidor suportar

    this.pages = [];
    this.lastLoginFails = false;
    this.lastTimeLogin = null;
    this.page_id = 0;
    this.scheduledJobs();
  }

  /**
   * Inicia tarefas agendadas
   */
  scheduledJobs = () => {
    /**
     * Cria novos browsers a cada 15 minutos até atingir o limite máximo.
     */
    const iniciarBrowsers = () => {
      const scheduledJobFunction = CronJob.schedule("*/15 * * * *", () => {
        console.log(
          `Browsers: ${this.page_id} de ${this.number_max_of_browsers}`
        );
        if (this.page_id < this.number_max_of_browsers) {
          console.log(
            `${new Date()} - Iniciando tarefa programada: INICIAR NOVOS BROWSERS`
          );
          let browsers_criados = 0;
          for (
            let page_num = 1;
            page_num <= this.number_of_max_logins_without_block;
            page_num++
          ) {
            if (this.page_id < this.number_max_of_browsers) {
              let new_page = new MaerskBot(page_num);
              new_page.init_page().then((ok) => {
                if (ok) {
                  console.log(
                    `${new Date()} - Browser ${this.page_id} iniciado.`
                  );
                  this.page_id++;
                  browsers_criados++;
                  this.pages.push(new_page);
                } else {
                  new_page.close_browser();
                }
              });
            }
          }
        }
      });

      scheduledJobFunction.start();
    };

    /**
     * Renova os browsers diariamente, adicionando novos e removendo os mais antigos.
     */
    const renovaBrowsers = () => {
      const scheduledJobFunction = CronJob.schedule("0 1 * * *", () => {
        if (!(this.page_id < this.number_max_of_browsers)) {
          console.log(
            `${new Date()} - Iniciando tarefa programada: RENOVA BROWSERS`
          );
          let browsers_criados = 0;
          let browsers_removidos = 0;
          for (
            let page_num = 1;
            page_num <= this.number_of_max_logins_without_block;
            page_num++
          ) {
            let new_page = new MaerskBot(page_num);
            new_page.init_page().then((ok) => {
              if (ok) {
                let browser_removido = this.pages.shift();
                browser_removido.close_browser().then(() => {
                  browsers_removidos++;
                  console.log(
                    `${new Date()} - Browser ${
                      browser_removido.page_id
                    } removido.`
                  );
                  this.page_id++;
                  browsers_criados++;
                  this.pages.push(new_page);
                  console.log("AGENDADOR: " + this.pages);
                  console.log(
                    `${new Date()} - Browser ${this.page_id} iniciado.`
                  );
                });
              } else {
                new_page.close_browser();
              }
            });
          }
        }
      });

      scheduledJobFunction.start();
    };

    // Iniciar tarefas agendadas
    iniciarBrowsers();
    renovaBrowsers();
  };

  /**
   * Realiza a busca dos dados, verificando a disponibilidade dos navegadores para impedir
   * erros que prejudiquem o servidor
   */
  async getData(request) {
    let response = null;
    let loginBlocked = false;

    if (this.pages.length === 0) {
      // As páginas ainda não carregaram
      return {
        erro: "Serviço indísponível no momento.",
      };
    } else if (this.lastLoginFails) {
      let dif = new Date(new Date() - this.lastTimeLogin);
      let totalMin = dif.getUTCHours() * 60 + dif.getUTCMinutes();
      if (totalMin < 15) {
        loginBlocked = true;
        // Login está bloqueado
        return {
          erro: `Limite de logins atingido. Tente novamente daqui a ${
            17 - totalMin
          } minutos.`,
        };
      }
    }

    if (!loginBlocked) {
      let wasPageFound = false;
      let pageFound = null;

      this.pages.forEach((page) => {
        if (!wasPageFound && !page.isInUse && page.pagina_iniciada) {
          wasPageFound = true;
          pageFound = page;
          console.log("Pagina disponível encontrada.");
          console.log(`Data último login da página: ${page.lastTimeLogin}`);
        }
      });

      if (wasPageFound) {
        response = await pageFound.busca_dados(request);
        this.lastLoginFails = pageFound.lastLoginFails;
        this.lastTimeLogin = pageFound.lastTimeLogin;
        return response;
      } else {
        return {
          erro: "Serviço indísponível no momento.",
        };
      }
    }
  }
}

module.exports = Maersk;
