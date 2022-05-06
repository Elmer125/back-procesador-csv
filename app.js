const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./utils/config");
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");
const routerApi = require("./router/routerApi");

logger.info("Conection to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("Connected to MongoDb");
  })
  .catch((error) => {
    logger.error("Error connection to MongoDB", error);
  });

app.use(cors());
app.use(express.static("build"));
app.use(bodyParser.json());
app.use(middleware.requestLogger);
routerApi(app);
app.use(middleware.unknownEndpoint);
app.use(middleware.boomErrorHandler);
app.use(middleware.errorHandler);

module.exports = app;
