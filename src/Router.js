const express = require('express')
const router = express.Router()

const uploadfile = require('./files/uploadFIle')
const user = require('./user/router')
const todo = require('./todo/router')

router.use((req, res, next) => {
  console.log(req.url)
  next()
})

router.get('/',(req, res) => {
  res.send("hello")
})

router.post('/uploadFIles',uploadfile)

router.all('/user/*',user)
router.all('/todo/*',todo)

module.exports = router