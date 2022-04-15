// Listener
const server = require('./server')

const port = process.env.PORT || 6969

server.listen(port, () => {
  console.log('Sever is listening on port', port)
})
