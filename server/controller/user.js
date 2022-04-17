const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
// const { BadRequestError, UnauthenticatedError } = require('../errors')

const createUser = async (req, res) => {
  console.log('req.body, createUser: ', req.body)
  const newUser = req.body
  const { auth0Id, email } = newUser
  const userDB = {
    auth0Id,
    email
  }
  const user = await User.create(userDB)
  res.status(StatusCodes.CREATED).json({ user: { email: user.email, id: user._id } })
}

module.exports = { createUser }
