const jwt = require('express-jwt')
const jwks = require('jwks-rsa')
require('dotenv').config()

const domain = process.env.DOMAIN
const audience = process.env.AUDIENCE

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`
  }),
  audience: audience,
  issuer: `${domain}/`,
  algorithms: ['RS256']
})

module.exports = checkJwt
