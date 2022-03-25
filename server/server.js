const path = require('path')
const express = require('express')

const server = express()
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())

server.use('/v1/*', (req, res) => res.sendStatus(404))

// i am not sure why, but we can investigate later on if we fuck up
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
