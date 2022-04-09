const express = require('express')
const { createUser } = require('../controller/user')
// const db = require('../dbFunc/dbTodos')

const router = express.Router()

module.exports = router

// public route (status: working)
router.post('/', createUser)
