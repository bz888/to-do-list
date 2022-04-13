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

// Object structure incorrect
const createTodo = async (req, res) => {
  // console.log('auth0Id testing post route: ', req.user)
  console.log('user sub testing post route: ', req.body)
  // req.body.createdBy = req.user.auth0Id
  const { todo } = req.body
  // const auth0Id = req.user?.sub
  // hard code auth0Id
  const newTodo = {
    createdBy: '62511a4283fa48258b0cccdf',
    description: todo.description,
    progression: todo.progression
  }
  const todoDB = await Todo.create(newTodo)
  res.status(StatusCodes.CREATED).json({ todoDB: { message: todoDB } })
}

module.exports = {
  getTodo,
  createTodo,
  getAllTodos
}
