import dotenv from 'dotenv'
import path from 'path'
import express from 'express'
import connectDB from './db/mongoDB'
import { todosRouter } from './routes/todos'
import { userRouter } from './routes/users'
dotenv.config()

// App Config
export const server = express()
server.use(express.static(path.join(__dirname, '../../public')))
server.use(express.json())

// API Endpoints
server.use('/api/v1/todos', todosRouter)
server.use('/api/v1/users', userRouter)

// server.use('/v1/*', (req, res) => res.sendStatus(404))

// DB config
connectDB()
// i am not sure why, but we can investigate later on if we fuck up
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
})
