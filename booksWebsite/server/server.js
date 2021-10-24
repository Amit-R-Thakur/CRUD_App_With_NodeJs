const express = require("express");
const path = require("path");
const ejs = require("ejs");
require("../database/connect.js");
const publicPath = path.join(__dirname, "../public");
console.log(publicPath);
const app = express();
const port = 4000;
app.use(express.static(path.join(__dirname, "../images")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const book = require("./Routes/books.js");
app.use(book);
app.use(express.static(publicPath));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("partial/nevbar.ejs");
});
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
