const express=require("express")
const path=require("path")
const ejs=require("ejs")
const publicPath=path.join(__dirname,"../public")
console.log (publicPath)
const app=express()
const port=4000
app.use(express.static(publicPath))
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    // res.send("hello")
    res.render("partial/nevbar.ejs")
})
app.get("/add",(req,res)=>{
    // res.send("hello")
    res.render("bookadd.ejs")
})
app.get("/update",(req,res)=>{
    // res.send("hello")
    res.render("bookupdate.ejs")
})
app.get("/delete",(req,res)=>{
    // res.send("hello")
    res.render("bookdelete.ejs")
})
app.get("/read",(req,res)=>{
    // res.send("hello")
    res.render("books.ejs")
})
// app.use(express.static())
app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
})