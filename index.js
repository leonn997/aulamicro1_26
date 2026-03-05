//Leonardo Bazarin Junior  RGM: 7138241

const express = require("express");

const app = express();

app.get("/teste", (req, res) => {

  res.send("Olá Mundo!");
});

app.get("/:leonardo", (req, res) => {

  const { leonardo } = req.params;

  res.status(200).json({

    mensagem: `Seja Bem vindo ${leonardo}`
  });
});

app.listen(3002, () => {

  console.log("Servidor On Leonardo Bazarin Junior");
});