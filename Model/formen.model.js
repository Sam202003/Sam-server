const mongoose = require("mongoose");

const FormenSchema = mongoose.Schema({
  id: Number,
  image: String,
  name: String,
  price: String,
  item: String,
  productdescription: String,
});
const Formenmodel = mongoose.model("formen", FormenSchema);

module.exports = { Formenmodel };
