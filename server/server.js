/* eslint-disable node/no-deprecated-api */
const path = require('path')
const express = require('express')
const { default: mongoose } = require('mongoose')
require('dotenv').config()
require('dotenv').load({ silent: true })

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
// server.use('/v1/*', (req, res) => res.sendStatus(404))

// DB config
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...')).catch(err => console.error(err))

// IP address deployment
const url = require('url')
const HttpsProxyAgent = require('https-proxy-agent')
const request = require('request')

const testEndPoint = 'https://ip.quotaguard.com'
const proxy = process.env.env.QUOTAGUARDSHIELD_URL
const agent = new HttpsProxyAgent(proxy)
const options = {
  uri: url.parse(testEndPoint),
  agent
}

// async function callback (error, response, body) {
//   try {
//     if (!error && response.statusCode === 200) {
//       console.log('body ', body)
//     } else {
//       throw error
//     }
//   } catch {
//     console.log('error: ', error)
//   }
// }

// request(options, callback)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})
module.exports = server
