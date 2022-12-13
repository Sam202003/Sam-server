const express = require("express");
const { Forgirlmodel } = require("../Model/forgirl.model");
const forgirlRouter = express.Router();

forgirlRouter.get("/", async (req, res) => {
  const alldata = await Forgirlmodel.find();
  res.send(alldata);
});

// forgirlRouter.post("/", async (req, res) => {
//   const payload = req.body;
//   const alldata = await Forgirlmodel.create(payload);
//   res.send("done");
// });

module.exports = { forgirlRouter };
