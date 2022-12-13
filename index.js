require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connect } = require("./Config/db");
const { formenRouter } = require("./Route/formen.route");
const { forwomenRouter } = require("./Route/forwomen.route");
const { forgirlRouter } = require("./Route/forgirl.route");
const { forboyRouter } = require("./Route/forboy.route");
const { forkidRouter } = require("./Route/forkid.route");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/formen", formenRouter);
app.use("/forwomen", forwomenRouter);
app.use("/forgirl", forgirlRouter);
app.use("/forboy", forboyRouter);
app.use("/forkid", forkidRouter);

app.get("/", (req, res) => {
  res.send("hi  sam's server..");
});

app.listen(process.env.PORT, async () => {
  try {
    await connect();
    console.log("db connection established");
  } catch (err) {
    console.log("db not connected");
  }
  console.log(`http://localhost:${process.env.PORT}`);
});
