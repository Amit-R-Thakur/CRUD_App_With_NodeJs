const Router = require("express").Router();
const book = require("../../database/model/books.js");
const multer = require("multer");
const path = require("path");
const bookImagesPath = path.join(__dirname, "../../images");
const storages = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("coll");
    cb(null, bookImagesPath);
  },
  filename: (req, file, cb) => {
    cb(null, "books" + "-" + Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storages });
Router.get("/add", (req, res) => {
  // res.send("hello")
  res.render("bookadd.ejs");
});
Router.post("/add", upload.single("image"), (req, res) => {
//   console.log(req.file.filename);
  const image=req.file.filename
  const {name,author,publisher,price}=req.body
  const newBook = new book({name,author,publisher,price,image});
   newBook.save()
  res.redirect("/");
});



Router.get("/update", (req, res) => {
  // res.send("hello")
  res.render("bookupdate.ejs");
});
Router.get("/delete", async(req, res) => {
  const data=await book.find()
   console.log(data)
  res.render("bookdelete.ejs",{data});
});
Router.get("/read", async(req, res) => {
   const data=await book.find()
   console.log(data)
   
  res.render("books.ejs",{data});
});
module.exports = Router;
