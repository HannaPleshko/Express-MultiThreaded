const express = require('express')
const bodyParser = require('body-parser')
const course = require('./controller/course.controller')

const app = express()

app.use(bodyParser.json())
app.use('/course', course)
app.use((er, erq, res, next) => res.send(er.message))

module.exports = app