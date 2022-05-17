import express, { Router } from 'express'
// const db = require('../dbFunc/dbTodos')
import { checkJwt } from '../middleware/auth0'
// const Todo = require('../models/Todo')
import { getAllTodos, createTodo, deleteTodo, patchTodoByID, patchTodo, deleteTodoByID } from '../controller/todos'

export const todosRouter: Router = express.Router()

// routes that needs to be protected

// testing public route getAll
todosRouter.get('/get/testing', checkJwt, getAllTodos)

todosRouter.post('/post/testing', checkJwt, createTodo)

todosRouter.delete('/delete/testing/:id', checkJwt, deleteTodoByID)
// router.delete('/delete/testing/', checkJwt, deleteTodo)

todosRouter.patch('/update/testing/:id', checkJwt, patchTodoByID)
todosRouter.patch('/update/testing/', checkJwt, patchTodo)

// post route for todos
// patch route (update)
// get route
// delete route

// router.post('/', checkJwt, )
