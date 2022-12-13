const mongoose = require("mongoose");

const ForgirlSchema = mongoose.Schema({
  id: Number,
  image: String,
  name: String,
  price: String,
  item: String,
  productdescription: String,
});
const Forgirlmodel = mongoose.model("forgirl", ForgirlSchema);

module.exports = { Forgirlmodel };
