const express = require("express");
const nunjucks = require("nunjucks");
const Maersk = require("./armadores/maersk/maersk");
const app = express();
app.use(express.static("public"));

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

// Iniciando armadores
const maersk = new Maersk(1, 5);

app.get("/", async (req, res) => {
  res.render("index.html");
});

app.get("/maersk", async (req, res) => {
  console.log("Nova consulta MAERSK:");
  let response = await maersk.getData(req.query);
  res.header("Access-Control-Allow-Origin", "*");
  res.send(response);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Listening on port ${PORT}...`);
});
