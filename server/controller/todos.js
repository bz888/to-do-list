const Todo = require('../models/Todo')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

// list all todos of user
const getAllTodos = async (req, res) => {
  console.log(req.user)
  const todos = await Todo.find({ createdBy: req.user?.sub }).sort('createdAt')
  res.status(StatusCodes.OK).json({ todos, count: todos.length })
}

// get individual todo
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

// update
const patchTodo = async (req, res) => {
  const {
    body: { progression, description },
    user: { userId },
    params: { id: todoId }
  } = req

  if (progression === '' || description === '') {
    throw new BadRequestError('Progression or description fields cannot be empty')
  }
  const todo = await Todo.findByIdAndUpdate(
    { _id: todoId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  )
  if (!todo) {
    throw new NotFoundError(`No Todo with id ${todoId}`)
  }
  res.status(StatusCodes.OK).json({ todo })
}

// delete
const deleteTodo = async (req, res) => {
  // const {
  //   params: { id: todoId }
  // } = req
  console.log('req.params: ', req.params)
  console.log('auth0Id testing post route: ', req.user)
  try {
    const todo = await Todo.findByIdAndRemove({
      _id: req.params.id,
      createdBy: req.user?.sub
    })
    res.status(StatusCodes.OK).json(`${todo._id} has been deleted`)
  } catch (err) {
    throw new NotFoundError(`No Todo with id ${req.params.id}`)
  }
  // if (!todo) {

  // }
}

// Object structure incorrect
const createTodo = async (req, res) => {
  console.log('auth0Id testing post route: ', req.user)
  console.log('user sub testing post route: ', req.body)
  const { todo } = req.body
  const auth0Id = req.user?.sub
  const newTodo = {
    createdBy: auth0Id,
    description: todo.description,
    progression: todo.progression
  }
  try {
    const todoDB = await Todo.create(newTodo)
    res.status(StatusCodes.CREATED).json({ todoDB: { message: todoDB } })
  } catch (err) {
    console.error('something wrong with create todo ' + err)
  }
}

module.exports = {
  getTodo,
  createTodo,
  getAllTodos,
  deleteTodo,
  patchTodo
}
