const router = require('express').Router()
const db = require('./db')

router.post('/user/1',(req, res) => {
  res.send('123123')
})

router.get('/user/2',(req, res) => {
  db.findAllUser().then(_res => {
    res.json({
      code: 0,
      data: _res
    })
  })
  
})

module.exports = router