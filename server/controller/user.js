const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
// const { BadRequestError, UnauthenticatedError } = require('../errors')

const createUser = async (req, res) => {
  const newUser = req.body
  const { auth0Id, email } = newUser
  const userDB = {
    auth0Id,
    email
  }
  const user = await User.create(userDB)
  res.status(StatusCodes.CREATED).json({ user: { email: user.email } })
}

module.exports = { createUser }
