const Todo = require('../models/Todo')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getAllTodos = async (req, res) => {
  const todos = await Todo.find({ createdBy: req.user.userId }).sort('createdAt')
  res.status(StatusCodes.OK).json({ todos, count: todos.length })
}

const getTodo = async (req, res) => {
  const {
    user: { auth0Id },
    params: { id: todoId }
  } = req

  const todo = await Todo.findOne({
    _id: todoId,
    createdBy: auth0Id
  })
  if (!todo) {
    throw new NotFoundError(`No todo with id ${todoId}`)
  }
  res.status(StatusCodes.OK).json({ todo })
}

const createTodo = async (req, res) => {
  req.body.createdBy = req.user.auth0Id
  const todo = await Todo.create(req.body)
  res.status(StatusCodes.CREATED).json({ todo })
}

module.exports = {
  getTodo,
  createTodo
  // getAllTodos
}
