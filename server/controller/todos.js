const Todo = require('../models/Todo')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

function timeConverter (time) {
  const data = new Date(time)
  return data.toString()
}

// list all todos of user
const getAllTodos = async (req, res) => {
  // console.log(req.user)
  const todos = await Todo.find({ createdBy: req.user?.sub }).sort({ createdAt: -1 })
  // res.status(StatusCodes.OK).json({ todos, count: todos.length })
  // res.status(StatusCodes.OK).json(todos)
  res.status(StatusCodes.OK).json(
    todos.map(ele => ({
      // ...ele,
      _id: ele._id,
      progression: ele.progression,
      description: ele.description,
      createdBy: ele.createdBy,
      updatedAt: timeConverter(ele.updatedAt),
      createdAt: timeConverter(ele.createdAt)
    })))
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
const patchTodoByID = async (req, res) => {
  const { todo } = req.body
  // console.log('patch route hit: ', todo)
  const patchTodo = await Todo.findByIdAndUpdate(
    { _id: req.params.id, createdBy: req.user?.sub },
    todo,
    { new: true, runValidators: true }
  )
  if (!patchTodo) {
    throw new NotFoundError(`No Todo with id ${req.params.id}`)
  }
  res.status(StatusCodes.OK).json({ todo })
}

const patchTodo = async (req, res) => {
  const { todo } = req.body
  // console.log('patch route hit: ', todo)
  const patchTodo = await Todo.findByIdAndUpdate(
    { _id: todo._id, createdBy: req.user?.sub },
    todo,
    { new: true, runValidators: true }
  )
  if (!patchTodo) {
    throw new NotFoundError(`No Todo with id ${req.params.id}`)
  }
  res.status(StatusCodes.OK).json({ todo })
}

// delete
const deleteTodoByID = async (req, res) => {
  // console.log('req.params: ', req.params)
  // console.log('auth0Id testing post route: ', req.user)
  try {
    const todo = await Todo.findByIdAndRemove({
      _id: req.params.id,
      createdBy: req.user?.sub
    })
    res.status(StatusCodes.OK).json(`${todo._id} has been deleted`)
  } catch (err) {
    throw new NotFoundError(`No Todo with id ${req.params.id}`)
  }
}

const deleteTodo = async (req, res) => {
  try {
    const { todo } = req.body

    const todoDEL = await Todo.findByIdAndRemove({
      _id: todo._id,
      createdBy: req.user?.sub
    })
    res.status(StatusCodes.OK).json(`${todoDEL._id} has been deleted`)
  } catch (err) {
    throw new NotFoundError(`No Todo with id ${req.params.id}`)
  }
}

const createTodo = async (req, res) => {
  // console.log('user sub testing post route: ', req.body)
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
  deleteTodoByID,
  patchTodoByID,
  patchTodo
}
