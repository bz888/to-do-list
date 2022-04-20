const express = require('express')
const { createUser, getUserByAuth } = require('../controller/user')
const checkJwt = require('../middleware/auth0')
// const db = require('../dbFunc/dbTodos')

const router = express.Router()

module.exports = router

// public route (status: working)
router.post('/', createUser)

router.post('/checkuser/', checkJwt, getUserByAuth)
