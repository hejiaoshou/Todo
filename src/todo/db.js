const mongoose = require('../db_connect').mongo;

var Todo = new mongoose.Schema({

  content: { type: String },

  istype: { type: Number , default: 0 },

  CreatedTime: { type: Number , default: Date.now }

})

var TodoModel = mongoose.model("Todo", Todo );

exports.addItem = (data) => {
  return new Promise ((resolve, reject) => {
    TodoModel.create({
      content: data.content
    }, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

exports.getall = () => {
  return new Promise ((resolve, reject) => {
    TodoModel.find({},(err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

exports.deleteOne = (data) => {
  return new Promise ((resolve, reject) => {
    TodoModel.deleteOne({_id: data.id}, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

exports.updateOne = (data,value) => {
  return new Promise ((resolve, reject) => {
    TodoModel.updateOne({_id: data.id}, value, (err, res) => {
      err ? reject(err) : resolve(res)
    })
  })
}
