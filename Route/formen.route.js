const express = require("express");
const { Formenmodel } = require("../Model/formen.model");
const formenRouter = express.Router();

formenRouter.get("/", async (req, res) => {
  const alldata = await Formenmodel.find();
  res.send(alldata);
});

module.exports = { formenRouter };
