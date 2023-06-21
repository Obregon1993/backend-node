const express = require("express");
const bodyParser = require("body-parser");

const swaggerUi = require("swagger-ui-express");

const config = require("../config.js");
const user = require("./components/user/network");
const auth = require("./components/auth/network.js");

const app = express();
app.use(bodyParser.json());

const swagerDoc = require("./swagger.json");

//Routes
app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagerDoc));

app.listen(config.api.port, () => {
  console.log("listening in port ", config.api.port);
});
