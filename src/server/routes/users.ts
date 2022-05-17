import express, { Router } from 'express'
// const db = require('../dbFunc/dbTodos')
import { checkJwt } from '../middleware/auth0'
import { createUser, getUserByAuth } from '../controller/user'
// const db = require('../dbFunc/dbTodos')

export const userRouter: Router = express.Router()

// public route (status: working)
userRouter.post('/', createUser)

userRouter.post('/checkuser/:uid', checkJwt, getUserByAuth)
