const express = require("express");
const { Forkidmodel } = require("../Model/forkid.model");
const forkidRouter = express.Router();

forkidRouter.get("/", async (req, res) => {
  const alldata = await Forkidmodel.find();
  res.send(alldata);
});

module.exports = { forkidRouter };
