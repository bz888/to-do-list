const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')
require('dotenv').config()

const domain = process.env.DOMAIN
const audience = process.env.AUDIENCE

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${domain}/.well-known/jwks.json`
  }),
  audience: audience,
  issuer: `https://${domain}/`,
  algorithms: ['RS256']
})

module.exports = checkJwt
