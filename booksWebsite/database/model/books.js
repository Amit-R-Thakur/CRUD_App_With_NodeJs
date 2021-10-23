const mongoose = require("mongoose");
const booksSchema = new mongoose.Schema({
  name: String,
  author: String,
  publisher: String,
  price: Number,
  image: String,
});
module.exports = new mongoose.model("book", booksSchema);
