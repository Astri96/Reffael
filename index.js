const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"), (_, res, next) => {
  res.status(404)
  res.sendFile(__dirname + "/404.html")
});

app.use(express.static(__dirname + "/public/3card"), (_, res, next) => {
  res.sendFile(__dirname + "./public/3Card/index.html")
});

app.use(express.static(__dirname + "/public/hover"), (_, res, next) => {
  res.sendFile(__dirname + "./public/hover/index.html")
});

app.use(express.static(__dirname + "/public/ProfileCard"), (_, res, next) => {
  res.sendFile(__dirname + "./public/ProfileCard/index.html")
});

app.listen(8080);