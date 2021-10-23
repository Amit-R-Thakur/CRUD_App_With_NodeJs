const express=require("express")
const path=require("path")
const ejs=require("ejs")
const bodyParser = require("body-parser");
require("../database/connect.js")



const publicPath=path.join(__dirname,"../public")
console.log (publicPath)
const app=express()
const port=4000
app.use(bodyParser.urlencoded());
app.use(express.json())
const book=require("./Routes/books.js")
app.use(book)
app.use(express.static(publicPath))
app.set("view engine","ejs");




app.get("/",(req,res)=>{
    // res.send("hello")
    res.render("partial/nevbar.ejs")
})
// app.use(express.static())
app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
})