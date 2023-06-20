const express = require("express");

const config = require("../config.js");

const app = express();

//Routes

app.listen(config.api.port, () => {
  console.log("listening in port ", config.api.port);
});
