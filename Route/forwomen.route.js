const express = require("express");
const { Forwomenmodel } = require("../Model/forwomen.model");
const forwomenRouter = express.Router();

forwomenRouter.get("/", async (req, res) => {
  const alldata = await Forwomenmodel.find();
  res.send(alldata);
});

module.exports = { forwomenRouter };
