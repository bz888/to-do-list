const express = require('express')
const Todo = require('../models/Todo')

// const db = require('../dbFunc/dbTodos')

const router = express.Router()
const checkJwt = require('../middleware/auth0')

module.exports = router

// routes that needs to be protected

// testing public route getAll

// post route for todos
// patch route (update)
// get route
// delete route

// router.post('/', checkJwt, )
