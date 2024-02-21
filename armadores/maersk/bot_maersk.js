const puppeteer = require("puppeteer-extra");
const fs = require("fs").promises;
const { executablePath } = require("puppeteer");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

/**
 * WebScraper desenvolvido com o Puppeteer que faz a
 * raspagem de dados do site "https://www.maersk.com".
 */
class MaerskBot {
  constructor(page_id) {
    this.page = null;
    this.browser = null;
    this.pagina_iniciada = false;
    this.isInUse = false;
    this.lastTimeLogin = null;
    this.lastLoginFails = false;
    this.page_id = page_id;
  }

  /**
   * Abre o browser, realiza o login e mantém a sessão ativa
   * para as próximas requisições.
   * @returns **boolean** — Retorna **true** se a a página foi criada. Se houve algum erro no login, retorna **false**.
   */
  async init_page() {
    // Se a página já foi iniciada dispara um erro.
    if (this.pagina_iniciada) {
      return true;
    }

    this.isInUse = true;

    try {
      // Criando o browser
      this.browser = await puppeteer.launch({
        headless: new,
        executablePath: executablePath(),
        ignoreHTTPSErrors: true,
        ignoreDefaultArgs: ["--enable-automation"],
        defaultViewport: null,
        args: [
          "--start-maximized",
          "--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36",
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--disable-web-security",
          "--disable-features=IsolateOrigins",
          "--disable-site-isolation-trials",
          "--disable-features=BlockInsecurePrivateNetworkRequests",
        ],
      });

      // Criando a page
      this.page = await this.browser.newPage("");

      await this.page.setViewport({ width: 1920, height: 1080 });

      // Setando um User Agent fake
      await this.page.evaluateOnNewDocument(() => {
        delete navigator.__proto__.webdriver;
      });

      await this.page.setExtraHTTPHeaders({
        "Accept-Language": "en-US,en;q=0.9",
      });

      await this.page.setUserAgent(
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36"
      );

      // Verificando se existem cookies salvos, se sim, usa eles
      let cookies_file_found = false;
      try {
        const cookiesString = await fs.readFile("cookies.json");
        const reuse_cookies = JSON.parse(cookiesString);
        await this.page.setCookie(...reuse_cookies);
        console.log("Cookies file found.");
        cookies_file_found = true;
      } catch (e) {
        console.log(e);
        console.log("Cookies file not found.");
      }

      // Abrindo a pagina
      await this.page.goto("https://www.maersk.com/instantPrice/", {
        waitUntil: "networkidle2",
      });

      // Verificando se é necessário fazer login
      let tem_login = false;
      let page_url = this.page.url();

      if (page_url.includes("login")) {
        tem_login = true;
      }

      if (!cookies_file_found || tem_login) {
        // Clicando no botao para aceitar todos os cookies
        if (!cookies_file_found) {
          const accept_cookies_btn = (
            await this.page.$x(
              "//*[@id='coiPage-1']/div/button[@onclick='CookieInformation.submitAllCategories();']"
            )
          )[0];
          await accept_cookies_btn.click();
        }

        // Faz o login
        let ok = this.fazer_login();

        // Se o login foi bem-sucedido, retorna true, se não, retorna false.
        if (ok) {
          this.pagina_iniciada = true;
          return true;
        } else {
          this.pagina_iniciada = false;
          return false;
        }
      }
    } catch (e) {
      console.log(`Erro na inicialização do browser: ${e}`);
      return false;
    }
  }

  /**
   * Com a page já iniciada, realiza o login no site.
   * @returns **boolean** — Retorna **true** se o login foi bem-sucedido. Se houve algum erro no login, retorna **false**.
   */
  async fazer_login() {
    this.isInUse = true;
    try {
      // Esperar os campos de login serem visíveis
      await this.page.setDefaultTimeout(20000);
      await this.page.waitForSelector("#coiOverlay", { hidden: true });
      await this.page.waitForTimeout(100);

      // Esperar os campos de login serem visíveis
      await this.page.waitForSelector("#usernameInput");

      // Setando username
      await this.page.focus("#usernameInput");
      await this.page.waitForTimeout(100);
      await this.page.type("#usernameInput", "karavelshipping", { delay: 12 });
      await this.page.waitForTimeout(100);

      // Setando senha
      await this.page.focus("#passwordInput");
      await this.page.waitForTimeout(100);
      await this.page.type("#passwordInput", "Drenagem2606@", { delay: 13 });
      await this.page.waitForTimeout(100);

      // await this.page.screenshot({ path: "prints/login.png", fullPage: true });

      // Clicando em entrar
      const login_btn = (await this.page.$x("//*[@id='login-form']/button"))[0];
      await login_btn.click();

      //Verificando se o logi  foi feito
      await this.page.waitForXPath('//input[@placeholder="Enter city name"]');
      // await this.page.screenshot({path: "prints/result_login.png",fullPage: true,});
      console.log("Login done!");
      this.lastLoginFails = false;
      this.lastTimeLogin = new Date();
      this.isInUse = false;
      return true;
    } catch (e) {
      // await this.page.screenshot({path: "prints/result_fail.png",fullPage: true,});
      console.log(`Login fail: ${e.toString()}`);
      this.lastLoginFails = true;
      this.lastTimeLogin = new Date();
      this.isInUse = false;
      return false;
    }
  }

  /**
   * Recebe os filtros e cria uma nova aba no navegador para realizar a raspagem dos dados no site.
   * Quando finaliza a raspagem fecha a página e retorna os dados estruturados em um Array.
   * @param {object} filtros
   * @returns Array -- Retorna um Array de Objetos com o resultado da raspagem.
   */
  async busca_dados(filtros) {
    this.isInUse = true;
    if (!this.pagina_iniciada) {
      return {
        erro: "Aguardando servidor iniciar...",
      };
    }

    let results = [];
    // Preencher porto de embarque
    try {
      this.page = await this.browser.newPage("");
      await this.page.setViewport({ width: 1920, height: 1080 });
      await this.page.evaluateOnNewDocument(() => {
        delete navigator.__proto__.webdriver;
      });

      await this.page.setExtraHTTPHeaders({
        "Accept-Language": "en-US,en;q=0.9",
      });
      await this.page.setUserAgent(
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36"
      );

      let cookies_file_found = false;
      // Scraper
      try {
        const cookiesString = await fs.readFile("cookies.json");
        const reuse_cookies = JSON.parse(cookiesString);
        await this.page.setCookie(...reuse_cookies);
        console.log("Cookies file found.");
        cookies_file_found = true;
      } catch (e) {
        console.log(e);
        console.log("Cookies file not found.");
      }

      // await page.waitForTimeout(5000);
      // await page.screenshot({ path: "prints/testresult3.png", fullPage: true });
      // return {};

      // Abrindo a pagina
      await this.page.goto("https://www.maersk.com/instantPrice/", {
        waitUntil: "networkidle2",
      });

      let page_url = this.page.url();

      if (page_url.includes("login")) {
        this.fazer_login();
      }

      await this.select_something(
        '//input[@placeholder="Enter city name"]',
        0,
        filtros.porto_embarque
      );

      // Preencher porto de chegada
      await this.select_something(
        '//input[@placeholder="Enter city name"]',
        1,
        filtros.porto_descarga
      );

      // Preencher commodity
      await this.select_something(
        '//input[@placeholder="Enter Commodity"]',
        0,
        filtros.mercadoria
      );

      // Preencher tipo de container
      await this.select_something(
        '//input[@placeholder="Select container type"]',
        0,
        filtros.tipo_container
      );

      // await this.page.screenshot({ path: "prints/busca1.png", fullPage: true });

      // Selecionar data:
      // 1 - Pegar data dos filtros
      const data_filtros = new Date(filtros.data_saida);

      // Pegar a data com o format_date
      const data_formatada = this.format_date(data_filtros);

      // Clicar para exibir calendário
      // input[@data-test="searchFormDateSelect"]

      await this.page.waitForXPath(
        '//input[@data-test="searchFormDateSelect"]'
      );
      const calendario = (
        await this.page.$x('//input[@data-test="searchFormDateSelect"]')
      )[0];
      await calendario.click();

      // Clicar no elemento
      // `td[@title="${formated_date}"]`
      try {
        let date_arr = data_formatada.split(" ");
        let ano_cal = date_arr[2].trim();
        let mes_cal = date_arr[1].trim();

        // Habilitando seleção do ano
        await this.page.waitForSelector(".mx-current-year");

        const ano_selec = (
          await this.page.$x(`//*[contains(@class, "mx-current-year")]`)
        )[0];

        await ano_selec.click();

        // Selecionando ANO
        await this.page.waitForXPath(
          `//span[contains(text(), "${ano_cal}") and contains(@class, "cell") and not(contains(@class, "disabled"))]`,
          { visible: true }
        );

        const ano_el = (
          await this.page.$x(
            `//span[contains(text(), "${ano_cal}") and contains(@class, "cell") and not(contains(@class, "disabled"))]`
          )
        )[0];

        console.log(ano_el);

        await ano_el.click();

        // Selecionando MES
        await this.page.waitForXPath(
          `//span[contains(text(), "${mes_cal}") and contains(@class, "cell") and not(contains(@class, "disabled"))]`,
          { visible: true }
        );

        const mes_el = (
          await this.page.$x(
            `//span[contains(text(), "${mes_cal}") and contains(@class, "cell") and not(contains(@class, "disabled"))]`
          )
        )[0];

        console.log(mes_el);

        await mes_el.click();

        await this.page.waitForXPath(
          `//*[contains(@title, "${data_formatada}")]`
        );
      } catch (e) {
        await this.page.close();
        this.isInUse = false;
        return {
          erro: `Data indisponível: ${e.toString()}`,
        };
      }

      // await this.page.screenshot({ path: "prints/busca2.png", fullPage: true });

      console.log(data_formatada);

      const data_calendario = (
        await this.page.$x(`//*[contains(@title, "${data_formatada}")]`)
      )[0];

      await data_calendario.click();
      // await this.page.screenshot({ path: "prints/busca3.png", fullPage: true });

      const btn_search = (
        await this.page.$x(`//button[contains(text(), "SEARCH")]`)
      )[0];

      btn_search.click();
      await this.page.waitForSelector("#coiOverlay", { hidden: true });

      // await this.page.screenshot({ path: "prints/busca4.png", fullPage: true });

      // get departures
      // Esperar as datas aparecerem
      await this.page.waitForXPath('//div[contains(@class, "slide-inside")]');

      // await this.page.screenshot({path: "prints/busca4-1.png",fullPage: true,});

      // Checar se botão LOAD MORE existe
      let load_more_exists = await this.page.$x(
        '//button[contains(text(), "Load more dates")]'
      );

      // Clicar nele até ele desaparecer
      while (load_more_exists && load_more_exists[0]) {
        console.log("loading more");
        try {
          await load_more_exists[0].click();
          await this.page.waitForSelector("#coiOverlay", { hidden: true });
        } catch (e) {
          console.log("Erro ao clicar no LOAD MORE, tentando novamente...");
        }

        load_more_exists = await this.page.$x(
          '//button[contains(text(), "Load more dates")]'
        );
      }
      //aria-hidden="true"

      // await this.page.screenshot({ path: "prints/busca5.png", fullPage: true });

      let datas = await this.page.$$(".vueperslide");

      if (datas && datas.length) {
        let quant_elementos = datas.length;
        for (let el_pos = 0; el_pos < quant_elementos; el_pos++) {
          await this.page.waitForSelector("#coiOverlay", { hidden: true });

          let datas_temp = await this.page.$$(".vueperslide");
          let el_inner = await (
            await datas_temp[el_pos].getProperty("innerHTML")
          ).jsonValue();

          if (!el_inner.includes('<div class="slide-inside--disabled">')) {
            await datas_temp[el_pos].click();

            // await this.page.screenshot({path: `busca_res${el_pos}.png`,fullPage: true,});

            await this.page.waitForXPath(
              '//*[contains(@class, "rate-details-card")]//div[contains(@class, "cardContent")]/div/div'
            );
            const result_details = await this.page.$x(
              '//*[contains(@class, "rate-details-card")]//div[contains(@class, "cardContent")]/div/div'
            );

            let saida_inner = await (
              await result_details[0].getProperty("innerHTML")
            ).jsonValue();

            let chegada_inner = await (
              await result_details[2].getProperty("innerHTML")
            ).jsonValue();

            let tempo_transito_inner = await (
              await result_details[1].getProperty("innerHTML")
            ).jsonValue();

            let navio_inner = await (
              await result_details[3].getProperty("innerHTML")
            ).jsonValue();

            await this.page.waitForXPath(
              '//*[contains(@class, "total-price--amount")]'
            );
            const total_price = await this.page.$x(
              '//*[contains(@class, "total-price--amount")]'
            );

            let total_price_inner = await (
              await total_price[0].getProperty("innerHTML")
            ).jsonValue();

            let saida_array = saida_inner
              .replace(/<\/div>/g, "")
              .split("<div>");
            let chegada_array = chegada_inner
              .replace(/<\/div>/g, "")
              .split("<div>");
            let tempo_transito_array = tempo_transito_inner
              .replace(/<\/div>/g, "")
              .split("</i>")[1]
              .split("TRANSIT TIME<div>\n");

            let navio = navio_inner
              .replace(/<\/div>/g, "")
              .split("</i>")[1]
              .split("VESSEL/VOYAGE :")[1]
              .split("<span>")[0]
              .trim();

            navio =
              navio +
              navio_inner
                .replace(/<\/div>/g, "")
                .split("</i>")[1]
                .split("VESSEL/VOYAGE :")[1]
                .split("<span>")[1]
                .replace("</span>", "")
                .trim();

            results.push({
              nome_navio: navio,
              porto_embarque: saida_array[1].split(">").at(-1),
              data_saida: new Date(saida_array[2]),
              tempo_de_transito: tempo_transito_array[1].trim(),
              horario_saida: saida_array[3],
              porto_descarga: chegada_array[1].split(">").at(-1),
              data_chegada: new Date(chegada_array[2]),
              horario_chegada: chegada_array[3],
              mercadoria: filtros.mercadoria,
              tipo_container: filtros.tipo_container,
              valor_total: total_price_inner,
            });

            console.log(results.at(-1));
          }
        }
      } else {
        await this.page.close();
        this.isInUse = false;
        return {
          error_msg: `Sem resultados.`,
        };
      }

      await this.page.waitForTimeout(5000);

      // Salvando cookies para a proxima sessao
      // const cookies = await page.cookies();
      // await fs.writeFile("cookies.json", JSON.stringify(cookies, null, 2));

      // await this.page.screenshot({path: "prints/result_busca.png",fullPage: true,});
      await this.page.close();
      this.isInUse = false;
      return results;
    } catch (e) {
      // await this.page.screenshot({path: "prints/result_busca_fail.png",fullPage: true,});
      await this.page.close();
      this.isInUse = false;
      if (results && results.length) {
        return results;
      } else {
        return {
          erro: e.toString(),
        };
      }
    }
  }

  async close_browser() {
    try {
      await this.browser.close();
      if (browser && browser.process() != null)
        browser.process().kill("SIGINT");
      console.log("Browser fechado.");
    } catch (e) {
      console.log("Browser já estava fechado.");
    }
  }

  format_date(date) {
    let date_str = new Date(date).toLocaleDateString("en-us", {
      day: "numeric",
      year: "numeric",
      month: "short",
    });
    date_str = date_str.replace(",", "");
    date_str = date_str.split(" ");
    date_str = `${date_str[1]} ${date_str[0]} ${date_str[2]}`;
    return date_str;
  }

  async select_something(el_xpath, pos, search_value) {
    // Esperar e preencher o input
    await this.page.waitForXPath(el_xpath);
    const input = (await this.page.$x(el_xpath))[pos];
    await input.focus();
    await input.type(search_value, { delay: 25 });

    // Esperar o elemento DIV @data-test='typeaheadOption-0' ser visível
    await this.page.waitForXPath(
      '//li[contains(@data-test, "typeaheadOption")]'
    );
    const option = (
      await this.page.$x('//li[contains(@data-test, "typeaheadOption")]')
    )[0];

    // Clicar nesse elemento
    await option.click();
  }
}

module.exports = MaerskBot;
