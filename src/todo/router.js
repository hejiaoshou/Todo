const router = require('express').Router()
const db = require('./db')

router.post('/Todo/all', (req, res) => {
  db.getall().then(_res => {
    res.json({
      code: 0,
      data: _res
    })
  })
})

router.post('/Todo/add', (req, res) => {
  db.addItem(req.body).then(_res => {
    res.json({
      code: 0,
      data: _res
    })
  })
})

router.delete('/Todo/delete', (req, res) => {
  db.deleteOne(req.body).then(_res => {
    res.json({
      code: 0,
      data: _res
    })
  })
})

module.exports = router