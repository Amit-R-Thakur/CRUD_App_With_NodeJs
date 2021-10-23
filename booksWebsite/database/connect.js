const mongoose=require("mongoose");
module.export=mongoose.connect("mongodb://localhost:27017",{
}).then(()=>{
    console.log("database connected")}).catch((err)=>{console.log(err)})