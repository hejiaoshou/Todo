const express = require('express')
const router = express.Router()

const uploadfile = require('./files/uploadFIle')

router.post('/uploadFIles',uploadfile)

router.post('/user/*',(req, res) => {
  res.send('user')
})

module.exports = router