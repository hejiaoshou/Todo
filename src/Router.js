const express = require('express')
const router = express.Router()

const uploadfile = require('./files/uploadFIle')
const user = require('./user/index')
router.use((req, res, next) => {
  console.log(req.url)
  next()
})

router.get('/',(req, res) => {
  res.send("hello")
})

router.post('/uploadFIles',uploadfile)

router.get('/user/*',user)

module.exports = router