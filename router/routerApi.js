const express = require("express");
const contactRouter = require("./contacts.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.get("/", (req, res) => {
    res.send("Funciona");
  });

  router.use("/contacts", contactRouter);
}

module.exports = routerApi;
