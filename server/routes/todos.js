const express = require('express')
// const Todo = require('../models/Todo')
const { getAllTodos, createTodo } = require('../controller/todos')
// const db = require('../dbFunc/dbTodos')

const router = express.Router()
const checkJwt = require('../middleware/auth0')

module.exports = router

// routes that needs to be protected

// testing public route getAll
router.get('/get/testing', getAllTodos)

router.post('/post/testing', checkJwt, createTodo)

// post route for todos
// patch route (update)
// get route
// delete route

// router.post('/', checkJwt, )
