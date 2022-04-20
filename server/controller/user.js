const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { NotFoundError, UserExists, BadRequestError } = require('../errors')
// const { BadRequestError, UnauthenticatedError } = require('../errors')

async function userExists (user) {
  const { auth0Id, _id } = user
  const existingUser = await User.findOne({
    // _id: _id,
    auth0Id: auth0Id
  })
  // if (exisitingUser.length >= 1) {
  //   res.json('User already exist')
  // }
  // res.status(StatusCodes.OK).json({ exisitingUser, count: exisitingUser.length })
  console.log('Existing user count: ', existingUser)
  return existingUser
}
const getUserByAuth = async (req, res) => {
  const auth0Id = req.user?.sub
  // const { email } = req.params.uid
  const getUser = await User.findOne({ auth0Id: auth0Id })
  res.status(StatusCodes.OK).json(getUser)
}

const createUser = async (req, res) => {
  console.log('req.body, createUser: ', req.body.user)
  const newUser = req.body.user
  const { auth0Id, email } = newUser
  const userDB = {
    auth0Id,
    email
  }

  const userCheck = await User.findOne({
    auth0Id: auth0Id, email: email
  })

  if (userCheck === null) {
    const user = await User.create(userDB)
    res.status(StatusCodes.CREATED).json({ user: { email: user.email, id: user._id } })
  } else {
    res.json('Email Used, user exists')
    throw new UserExists('Email Used, user exists')
  }

  // res.status(StatusCodes.CONFLICT).json({ userCheck })
}

module.exports = { createUser, getUserByAuth }
