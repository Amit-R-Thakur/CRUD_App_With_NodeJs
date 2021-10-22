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
    res.render("nevbar.ejs")
})
// app.use(express.static())
app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
})