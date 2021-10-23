const mongoose = require("mongoose");
module.export = mongoose
  .connect("mongodb://localhost:27017/nodeBookApp", {})
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });
