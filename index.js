const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const uploadfile = require('./src/files/uploadFIle')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    console.log(req.url)
    res.send('heelo,world!')
})

app.post('/uploadFIles',uploadfile)

app.post('/test', (req, res) => {
    console.log(req.body)
    res.json({
        code: 1
    })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))