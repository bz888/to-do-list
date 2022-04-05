const { default: mongoose } = require('mongoose')

const todoSchema = mongoose.Schema({
  progression: Boolean,
  detail: String,
  date: String
})

const Todo = mongoose.model('todos', todoSchema)

module.exports = Todo
