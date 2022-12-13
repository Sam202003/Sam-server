const mongoose = require("mongoose");

const ForkidSchema = mongoose.Schema({
  id: Number,
  image: String,
  name: String,
  price: String,
  item: String,
  productdescription: String,
});
const Forkidmodel = mongoose.model("forkid", ForkidSchema);

module.exports = { Forkidmodel };
