import { Todo } from '../models/Todo'
import { StatusCodes } from 'http-status-codes'
// import { BadRequestError, NotFoundError } from '../errors'
import { Request, Response } from 'express'
import { TodoObjType } from '../types/types'

function timeConverter (time: Date): string {
  const data = new Date(time)
  return data.toString()
}

// list all todos of user
export const getAllTodos = async (req: Request, res: Response) => {
  // console.log(req.user)
  const todos: TodoObjType[] = await Todo.find({ createdBy: req.user?.sub }).sort({ createdAt: -1 })
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
export const getTodo = async (req: Request, res: Response) => {
  const {
    // user: { auth0Id },
    params: { id: todoId }
  } = req

  const todo = await Todo.findOne({
    _id: todoId,
    createdBy: req.user?.auth0Id
  })
  if (!todo) {
    res.json(`No todo with id ${todoId}`)
    // throw new NotFoundError(`No todo with id ${todoId}`)
  }
  res.status(StatusCodes.OK).json({ todo })
}

// update
export const patchTodoByID = async (req: Request, res: Response) => {
  const { todo } = req.body
  // console.log('patch route hit: ', todo)
  const patchTodo = await Todo.findByIdAndUpdate(
    { _id: req.params.id, createdBy: req.user?.sub },
    todo,
    { new: true, runValidators: true }
  )
  if (!patchTodo) {
    res.json(`No Todo with id ${req.params.id}`)
    // throw new NotFoundError(`No Todo with id ${req.params.id}`)
  }
  res.status(StatusCodes.OK).json({ todo })
}

export const patchTodo = async (req: Request, res: Response) => {
  const { todo } = req.body
  // console.log('patch route hit: ', todo)
  const patchTodo = await Todo.findByIdAndUpdate(
    { _id: todo._id, createdBy: req.user?.sub },
    todo,
    { new: true, runValidators: true }
  )
  if (!patchTodo) {
    res.json(`No Todo with id ${req.params.id}`)
    // throw new NotFoundError(`No Todo with id ${req.params.id}`)
  }
  res.status(StatusCodes.OK).json({ todo })
}

// delete
export const deleteTodoByID = async (req: Request, res: Response) => {
  // console.log('req.params: ', req.params)
  // console.log('auth0Id testing post route: ', req.user)
  try {
    const todo = await Todo.findByIdAndRemove({
      _id: req.params.id,
      createdBy: req.user?.sub
    })
    res.status(StatusCodes.OK).json(`${todo._id} has been deleted`)
  } catch (err) {
    res.json(`No Todo with id ${req.params.id}`)
    // throw new NotFoundError(`No Todo with id ${req.params.id}`)
  }
}

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { todo } = req.body

    const todoDEL = await Todo.findByIdAndRemove({
      _id: todo._id,
      createdBy: req.user?.sub
    })
    res.status(StatusCodes.OK).json(`${todoDEL._id} has been deleted`)
  } catch (err) {
    res.json(`No Todo with id ${req.params.id}`)
    // throw new NotFoundError(`No Todo with id ${req.params.id}`)
  }
}

export const createTodo = async (req: Request, res: Response) => {
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

// module.exports = {
//   getTodo,
//   createTodo,
//   getAllTodos,
//   deleteTodo,
//   deleteTodoByID,
//   patchTodoByID,
//   patchTodo
// }
