import puppeteer from "puppeteer-extra";
import { promises as fs } from "fs";
import { executablePath } from "puppeteer";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
puppeteer.use(StealthPlugin());
import ports from "./ports.js";

// Models
import Porto from "../../model/Porto.js";

class EvergreenBot {
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
        headless: true,
        executablePath: executablePath(), // TESTES
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        // executablePath: "/usr/bin/google-chrome",
        // ignoreHTTPSErrors: true,
        // ignoreDefaultArgs: ["--enable-automation"],
        // defaultViewport: null,
        // args: [
        //   "--start-maximized",
        //   "--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36",
        //   "--no-sandbox",
        //   "--disable-setuid-sandbox",
        //   "--disable-web-security",
        //   "--disable-features=IsolateOrigins",
        //   "--disable-site-isolation-trials",
        //   "--disable-features=BlockInsecurePrivateNetworkRequests",
        // ],
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
        const cookiesString = await fs.readFile("./cookies.json");
        const reuse_cookies = JSON.parse(cookiesString);
        await this.page.setCookie(...reuse_cookies);
        console.log("Cookies file found.");
        cookies_file_found = true;
      } catch (e) {
        console.log(e);
        console.log("Cookies file not found.");
      }

      // Abrindo a pagina
      await this.page.goto("https://portal.greenxtrade.com/quotes", {
        waitUntil: "networkidle2",
      });

      // Verificando se é necessário fazer login
      let tem_login = false;
      let page_url = this.page.url();

      if (page_url.includes("/sign_in")) {
        tem_login = true;
      }

      if (!cookies_file_found || tem_login) {
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

      if (cookies_file_found) {
        this.pagina_iniciada = true;
        return true;
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
      await this.page.waitForSelector("#user_email");

      // Setando username
      await this.page.focus("#user_email");
      await this.page.waitForTimeout(100);
      await this.page.type("#user_email", "alvaro@karavel.com.br", {
        delay: 12,
      });
      await this.page.waitForTimeout(100);

      // Setando senha
      await this.page.focus("#user_password");
      await this.page.waitForTimeout(100);
      await this.page.type("#user_password", "Drenagem2606@", { delay: 13 });
      await this.page.waitForTimeout(100);

      // await this.page.screenshot({ path: "prints/login.png", fullPage: true });

      // Clicando em "remember me"
      const remember_btn = (
        await this.page.$x("//input[@value='remember-me']")
      )[0];
      await remember_btn.click();

      // Clicando em entrar
      const login_btn = (await this.page.$x("//button[@id='sign-in']"))[0];
      await login_btn.click();

      await this.page.waitForTimeout(100);

      //Verificando se o logi  foi feito
      await this.page.waitForXPath('//a[@href="/home"]');
      // await this.page.screenshot({path: "prints/result_login.png",fullPage: true,});
      console.log("Login done!");
      this.lastLoginFails = false;
      this.lastTimeLogin = new Date();
      this.isInUse = false;

      //Baixa e atualiza o cookie
      const cookies = await this.page.cookies();
      await fs.writeFile("./cookies.json", JSON.stringify(cookies, null, 2));

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

  async delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  /**
   * Recebe os filtros e cria uma nova aba no navegador para realizar a raspagem dos dados no site.
   * Quando finaliza a raspagem fecha a página e retorna os dados estruturados em um Array.
   * @param {object} filtros
   * @returns Array -- Retorna um Array de Objetos com o resultado da raspagem.
   */
  async busca_dados(
    data_saida,
    porto_embarque,
    porto_descarga,
    mercadoria,
    tipo_container
  ) {
    this.isInUse = true;
    if (!this.pagina_iniciada) {
      return [];
    }

    let results = [];

    try {
      // Get porto embarque
      const porto_embarque_def = await Porto.find({ port_id: porto_embarque });

      // Get porto descarga
      const porto_descarga_def = await Porto.find({ port_id: porto_descarga });

      let portnamedef = porto_embarque_def[0].port_name;
      let destinationportnamedef = porto_descarga_def[0].port_name;
      let origincodedef = porto_embarque_def[0].port_code;
      let destinationcodedef = porto_descarga_def[0].port_code;

      let data_saida_convertida = converteStrToData2(data_saida);
      let data_num = data_saida_convertida.getTime() / 1000;

      let c_20gp = 0;
      let c_40gp = 0;
      let c_40hq = 0;

      if (tipo_container == "ST20") {
        c_20gp = 1;
      } else if (tipo_container == "ST40") {
        c_40gp = 1;
      } else if (tipo_container == "HQ40") {
        c_40hq = 1;
      } else {
        throw "Tipo de container inválido.";
      }

      let response_graphql;

      // Response Listener
      this.page.on("response", async (response) => {
        if (response.url().includes("/graphql")) {
          let res = await response.json();
          if (res.data.quotes2) {
            response_graphql = res.data.quotes2;
          }
        }
      });

      // Monta URL
      await this.page.goto(
        `https://portal.greenxtrade.com/quotes/results/${origincodedef}/${destinationcodedef}/${c_20gp}/${c_40gp}/${c_40hq}/${data_num}`,
        {
          waitUntil: "networkidle2",
        }
      );

      let tempo_max_espera = 60; //segundos
      let contador = 0;

      while (!response_graphql && contador < tempo_max_espera) {
        await this.delay(1000);
        contador++;
        console.log("Response not found");
      }

      if (!response_graphql) {
        throw "Tempo de resposta limite do graphql atingido.";
      }

      this.page.close();
      this.close_browser();

      const carriers = response_graphql.carriers;

      response_graphql.quotes.forEach((quote) => {
        let carrier = carriers.find((carrier) => {
          return carrier.scac === quote.carrier.scac;
        });

        results.push({
          shipment_id: quote.voyage.code,
          tipo_container: tipo_container,
          id_tipo_container: tipo_container,
          porto_embarque: portnamedef.split(" - ")[0],
          id_porto_embarque: origincodedef.port_code,
          porto_descarga: destinationportnamedef.split(" - ")[0],
          id_porto_descarga: destinationcodedef.port_code,
          armador: quote.carrier.name,
          id_armador: quote.carrier.scac,
          navio: `${quote.vessel.name} ${quote.voyage.code}`,
          data_embarque: formataData(new Date(quote.etd * 1000)),
          tempo_de_transito: `${quote.transitTime.end} days`,
          data_chegada: formataData(new Date(quote.eta * 1000)),
          //frete: `$ ${0}`,
          frete: `No Space Available`,
          // imagem_link: carrier.logoUrl,
          imagem_link:
            "https://cdn.greenxtrade.com/dist/gxportal/img/company-logo-evergreen.svg",
        });
      });

      return results;
    } catch (e) {
      console.log(e);
      return results;
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
}

function formataData(data) {
  function adicionaZero(numero) {
    if (numero <= 9) return "0" + numero;
    else return numero;
  }
  let dataFormatada =
    adicionaZero(data.getDate().toString()) +
    "/" +
    adicionaZero(data.getMonth() + 1).toString() +
    "/" +
    data.getFullYear();
  return dataFormatada;
}

function converteStrToData2(dataStr) {
  let [yearStr, monthStr, dayStr] = dataStr.split("-");
  if (dayStr[0] === "0") {
    dayStr = dayStr.replace("0", "");
  }
  if (monthStr[0] === "0") {
    monthStr = monthStr.replace("0", "");
  }

  let day = parseInt(dayStr);
  let month = parseInt(monthStr) - 1;
  let year = parseInt(yearStr);

  return new Date(year, month, day);
}

export default EvergreenBot;
