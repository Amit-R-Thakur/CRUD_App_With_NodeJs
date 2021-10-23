const Router=require("express").Router()
const book=require("../../database/model/books.js")
console.log(book)
Router.get("/add",(req,res)=>{
    // res.send("hello")
    res.render("bookadd.ejs")
})
Router.post("/add",(req,res)=>{
    const newBook=new book(req.body);

    res.redirect("/")
})
Router.get("/update",(req,res)=>{
    // res.send("hello")
    res.render("bookupdate.ejs")
})
Router.get("/delete",(req,res)=>{
    // res.send("hello")
    res.render("bookdelete.ejs")
})
Router.get("/read",(req,res)=>{
    // res.send("hello")
    res.render("books.ejs")
})
module.exports=Router