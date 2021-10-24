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
  res.render("bookadd.ejs");
});
Router.post("/add", upload.single("image"), (req, res) => {
  const image = req.file.filename;
  const { name, author, publisher, price } = req.body;
  const newBook = new book({ name, author, publisher, price, image });
  newBook.save();
  res.redirect("/");
});

Router.get("/update", async (req, res) => {
  const data = await book.find();
  res.render("bookupdate.ejs", { data });
});
Router.get("/update:id", async (req, res) => {
  const _id = req.params.id;
  const data = await book.findById(_id);
  res.render("bookupdatefile", { data });
});
Router.post("/update:id", upload.single("image"), async (req, res) => {
  const _id = req.params.id;
  console.log(req.body);
  if (req.file) {
    const image = req.file.filename;
    const { name, author, publisher, price } = req.body;
    const newRecord = { name, author, publisher, price, image };
    await book
      .updateOne({ _id }, { $set: newRecord }, { returnNewDocument: true })
      .then(() => {
        console.log("successfull");
      })
      .catch((err) => {
        console.log(err);
      });
    res.redirect("/update");
  } else {
    const { name, author, publisher, price } = req.body;
    const newRecord = { name, author, publisher, price };
    await book
      .updateOne({ _id }, { $set: newRecord }, { returnNewDocument: true })
      .then(() => {
        console.log("successfull");
      })
      .catch((err) => {
        console.log(err);
      });
    res.redirect("/update");
  }
});

Router.get("/delete", async (req, res) => {
  const data = await book.find();
  console.log(data);
  res.render("bookdelete.ejs", { data });
});
Router.get("/delete:id", async (req, res) => {
  const _id = req.params.id;
  await book.findOneAndDelete({ _id });
  res.redirect("/delete");
});
Router.get("/read", async (req, res) => {
  const data = await book.find();
  console.log(data);

  res.render("books.ejs", { data });
});
module.exports = Router;
