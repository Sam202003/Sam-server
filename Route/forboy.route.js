const express = require("express");
const { Forboymodel } = require("../Model/forboy.model");
const forboyRouter = express.Router();

forboyRouter.get("/", async (req, res) => {
  const alldata = await Forboymodel.find();
  res.send(alldata);
});

// forboyRouter.post("/", async (req, res) => {
//   const payload = req.body;
//   const alldata = await Forboymodel.create(payload);
//   res.send("done");
// });

module.exports = { forboyRouter };
