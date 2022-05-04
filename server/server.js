/* eslint-disable node/no-deprecated-api */
const path = require('path')
const express = require('express')
const { default: mongoose } = require('mongoose')
require('dotenv').config()

// App Config
const server = express()
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())

// API Endpoints
const todos = require('./routes/todos')
const users = require('./routes/users')
server.use('/api/v1/todos', todos)
server.use('/api/v1/users', users)

const uri = process.env.URI
server.use('/v1/*', (req, res) => res.sendStatus(404))

// DB config
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...')).catch(err => console.error(err))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})
module.exports = server
