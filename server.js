const express = require("express");
const nunjucks = require("nunjucks");
// const Maersk = require("./armadores/maersk/maersk");
const zimbot = require("./armadores/zim/zimBot");
const EvergreenBot = require("./armadores/evergreen/evergreenBot");
const connectDatabase = require("./db");
const app = express();
connectDatabase();

app.use(express.static("public"));

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

// Iniciando armadores
// const maersk = new Maersk(1, 5);

app.get("/", async (req, res) => {
  res.render("index.html");
});

app.get("/zim", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  const {
    data_saida,
    porto_embarque,
    porto_descarga,
    mercadoria,
    tipo_container,
  } = req.query;

  const response = await zimbot(
    data_saida,
    porto_embarque,
    porto_descarga,
    mercadoria,
    tipo_container
  );
  res.send(response);
});

app.get("/evergreen", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  const {
    data_saida,
    porto_embarque,
    porto_descarga,
    mercadoria,
    tipo_container,
  } = req.query;

  const evBot = new EvergreenBot(0);
  let ok = await evBot.init_page();

  if (!ok) {
    return [];
  }
  res.send(
    await evBot.busca_dados(
      data_saida,
      porto_embarque,
      porto_descarga,
      mercadoria,
      tipo_container
    )
  );
});

// app.get("/maersk", async (req, res) => {
//   console.log("Nova consulta MAERSK:");
//   let response = await maersk.getData(req.query);
//   res.header("Access-Control-Allow-Origin", "*");
//   res.send(response);
// });

const PORT = process.env.PORT || 3000;
// const PORT = process.env.PORT || 3334; //TESTES

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Listening on port ${PORT}...`);
});
