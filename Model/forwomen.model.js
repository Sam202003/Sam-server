const mongoose = require("mongoose");

const ForwomenSchema = mongoose.Schema({
  id: Number,
  image: String,
  name: String,
  price: String,
  item: String,
  productdescription: String,
});
const Forwomenmodel = mongoose.model("forwomen", ForwomenSchema);

module.exports = { Forwomenmodel };
