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

  const whitelist = ['http://localhost:8080', 'https://blooming-sierra-49928.herokuapp.com/'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}

app.use(cors(options));
routerApi(app);
app.use(express.static("build"));
app.use(bodyParser.json());
app.use(middleware.requestLogger);

app.use(middleware.unknownEndpoint);
app.use(middleware.boomErrorHandler);
app.use(middleware.errorHandler);

module.exports = app;
