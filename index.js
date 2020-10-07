const http = require('http')
const path = require('path')
const cors = require('cors')
require('dotenv').config()

const express = require('express')
const app = express()

app.use(cors())

app.use(express.static('build'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'))
})

process.on('uncaughtException', (reason, p) => {
  console.log(console.error(reason, 'Unhandled Rejection at Promise', p))
})