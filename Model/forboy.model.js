const mongoose = require("mongoose");

const ForboySchema = mongoose.Schema({
  id: Number,
  image: String,
  name: String,
  price: String,
  item: String,
  productdescription: String,
});
const Forboymodel = mongoose.model("forboy", ForboySchema);

module.exports = { Forboymodel };
