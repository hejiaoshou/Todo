const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const router = require('./src/Router')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(router)

app.listen(3000, () => console.log('Example app listening on port 3000!'))