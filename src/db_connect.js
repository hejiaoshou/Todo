const mongoose = require("mongoose")

const myUri = "mongodb://127.0.0.1:27017/blog"

mongoose.connect(myUri,{
  useNewUrlParser:true,
})

exports.mongo = mongoose
