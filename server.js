const express = require("express");
const nunjucks = require("nunjucks");
// const init_bot = require("./bot");
// const bot = require("./bot");
// const init_bot = require("./bot_init");
const MaerskBot = require("./bot_maersk");
const app = express();
let ultima_consulta_indisponivel = null;

app.use(express.static("public"));
const maersk_bot = new MaerskBot();
maersk_bot.init_page();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.get("/", async (req, res) => {
  res.render("index.html");
});

app.get("/maersk", async (req, res) => {
  console.log("Request feito");
  const response = await maersk_bot.busca_dados(req.query);
  res.send(response);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Listening on port ${PORT}...`);
});
