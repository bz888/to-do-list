const express = require('express')
const Todo = require('../models/Todo')

// const db = require('../dbFunc/dbTodos')

const router = express.Router()
const checkJwt = require('../middleware/auth0')

module.exports = router

router.post('/', checkJwt, async (req, res) => {
  const { todos } = req.body
  const auth0Id = req.user?.sub
  const newTodo = {
    byUser: auth0Id,

  }
  Todo.create(req.body)
    .then(() => res.json({ msg: 'todo added success' }))
    .catch(err => res.status(500).json({ error: 'Unable to add todos' + err }))
})
