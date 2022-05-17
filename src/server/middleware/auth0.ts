import jwt from 'express-jwt'
import jwksRsa from 'jwks-rsa'
import dotenv from 'dotenv'
// require('dotenv').config()
dotenv.config()

const domain = process.env.DOMAIN
console.log('checkJwt domain: ', domain)
const audience = process.env.AUDIENCE
console.log('checkJwt aduience: ', audience)
// const domain = process.env.DOMAIN
// const audience = process.env.AUDIENCE

export const checkJwt = jwt({
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
