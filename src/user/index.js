const express = require('express')
const router = express.Router()

router.get('/user/add',(req, res) => {
  console.log(11)
  res.send('123123')
})

module.exports = router