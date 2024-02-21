import express from "express";
import zimbot from "./armadores/zim/zimBot.js";
import EvergreenBot from "./armadores/evergreen/evergreenBot.js";
import connectDatabase from "./db.js";
const app = express();
import pLimit from "p-limit";
connectDatabase();

app.use(express.static("public"));

// Iniciando armadores
// const maersk = new Maersk(1, 5);

const limit = pLimit(1); // Limita a 2 processos em execução simultânea

app.get("/", async (req, res) => {
  res.render("./views/index.html");
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

  const response = await limit(async () =>
    zimbot(
      data_saida,
      porto_embarque,
      porto_descarga,
      mercadoria,
      tipo_container
    )
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
  let ok = await limit(async () => evBot.init_page());

  if (!ok) {
    return [];
  }
  res.send(
    await limit(() =>
      evBot.busca_dados(
        data_saida,
        porto_embarque,
        porto_descarga,
        mercadoria,
        tipo_container
      )
    )
  );
});

// app.get("/maersk", async (req, res) => {
//   console.log("Nova consulta MAERSK:");
//   let response = await maersk.getData(req.query);
//   res.header("Access-Control-Allow-Origin", "*");
//   res.send(response);
// });

// const PORT = process.env.PORT || 3000;
const PORT = process.env.PORT || 5000; //TESTES

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Listening on port ${PORT}...`);
});
