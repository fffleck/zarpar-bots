const puppeteer = require("puppeteer-extra");
const fs = require("fs").promises;
const { executablePath } = require("puppeteer");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

// Models
const ZimPorto = require("../../model/ZimPorto");
const Porto = require("../../model/Porto");

const zimbot = async (
  data_saida,
  porto_embarque,
  porto_descarga,
  mercadoria,
  tipo_container
) => {
  try {
    // Criando o browser
    const browser = await puppeteer.launch({
      headless: true,
      // executablePath: executablePath(),
      // executablePath: "/usr/bin/google-chrome",
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

    // data_saida  YYYY-MM-DD
    // porto_embarque  //PADRAO
    // porto_descarga // PADRAO

    // Get porto embarque
    const porto_embarque_zim = await ZimPorto.find({ port_id: porto_embarque });
    // console.log(porto_embarque_zim);

    // Get porto descarga
    const porto_descarga_zim = await ZimPorto.find({ port_id: porto_descarga });
    // console.log(porto_descarga_zim);

    // Get porto embarque
    const porto_embarque_def = await Porto.find({ port_id: porto_embarque });
    // console.log(porto_embarque_zim);

    // Get porto descarga
    const porto_descarga_def = await Porto.find({ port_id: porto_descarga });
    // console.log(porto_descarga_zim);

    let portname = porto_embarque_zim[0].port_name;
    let destinationportname = porto_descarga_zim[0].port_name;
    let shipmentdate = data_saida;
    let origincode = porto_embarque_zim[0].port_code;
    let destinationcode = porto_descarga_zim[0].port_code;

    let portnamedef = porto_embarque_def[0].port_name;
    let destinationportnamedef = porto_descarga_def[0].port_name;
    let origincodedef = porto_embarque_def[0].port_code;
    let destinationcodedef = porto_descarga_def[0].port_code;

    // Criando a page
    const page = await browser.newPage("");

    await page.setViewport({ width: 1920, height: 1080 });

    // Setando um User Agent fake
    await page.evaluateOnNewDocument(() => {
      delete navigator.__proto__.webdriver;
    });

    await page.setExtraHTTPHeaders({
      "Accept-Language": "en-US,en;q=0.9",
    });

    await page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36"
    );

    // Abrindo a pagina
    await page.goto(
      `https://www.zim.com/api/v2/tariffCalculator/GetResult?portname=${portname}&destinationportname=${destinationportname}&shipmentdate=${shipmentdate}&origincode=${origincode}&destinationcode=${destinationcode}`,
      {
        waitUntil: "networkidle2",
      }
    );

    console.log(await page.url());
    const body_content = await page.$("body");
    const text_html = await (
      await body_content.getProperty("textContent")
    ).jsonValue();

    try {
      await browser.close();
      if (browser && browser.process() != null)
        browser.process().kill("SIGINT");
      console.log("Browser fechado.");
    } catch (e) {
      console.log("Browser já estava fechado.");
    }

    let result_json = JSON.parse(text_html);
    console.log(result_json.result.routes);

    let frete = 0.0;
    let transitTime = 0;
    let containerType = "";
    let routes;
    try {
      routes = result_json.result.routes;
    } catch (e) {
      throw "Sem resultados.";
    }

    if (tipo_container == "ST20") {
      containerType = "dv20Rate";
    } else if (tipo_container == "ST40") {
      containerType = "dv40Rate";
    } else if (tipo_container == "HQ40") {
      containerType = "hc40Rate";
    } else {
      throw "Tipo de container inválido.";
    }
    let rate_total;
    let shipment_id;
    routes.forEach((route) => {
      rate_total = route.rates.find((rate) => {
        return rate.chargeDescription == "Total";
      });

      shipment_id = route.referenceCode;

      // Transit Time
      transitTime += parseInt(route.transitTimeDays);

      // Container Fee
      frete += parseFloat(rate_total[containerType][0]);
    });

    let data_saida_convertida = converteStrToData2(data_saida);

    let data_chegada = new Date(data_saida_convertida);
    data_chegada.setDate(data_chegada.getDate() + transitTime);

    console.log("Ok");

    return [
      {
        shipment_id: shipment_id,
        tipo_container: tipo_container,
        id_tipo_container: tipo_container,
        porto_embarque: portnamedef.split(" - ")[0],
        id_porto_embarque: origincodedef.port_code,
        porto_descarga: destinationportnamedef.split(" - ")[0],
        id_porto_descarga: destinationcodedef.port_code,
        armador: "Zim",
        id_armador: "Zim",
        navio: "",
        data_embarque: formataData(data_saida_convertida),
        tempo_de_transito: `${transitTime} days`,
        data_chegada: formataData(data_chegada),
        frete: `$ ${frete}`,
        imagem_link: "https://www.zim.com/static/images/logo_zim_social.png",
      },
    ];
  } catch (e) {
    console.log(`Erro no bot da Zim: ${e}`);
    return [];
  }
};

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

module.exports = zimbot;
