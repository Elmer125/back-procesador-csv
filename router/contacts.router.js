const boom = require("@hapi/boom");
const express = require("express");
const contactRouter = express.Router();
const contactmodel = require("../models/contact.models");

contactRouter.get("/", (req, res, next) => {
  contactmodel.find({}).then((list) => {
    res.status(200).json(list);
  });
});

contactRouter.post("/", (req, res, next) => {
  const body = req.body;
  try {
    body.forEach((element) => {
      const contact = new contactmodel({
        name: element.name,
        lastname: element.lastname,
        phone: element.phone,
      });
      return contact
        .save()
        .then(() => res.status(200).json("created"))
        .catch((error) => next(boom.badRequest(error)));
    });
  } catch (error) {
    next(boom.badRequest(error));
  }
});

module.exports = contactRouter;
