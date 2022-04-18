const { default: mongoose } = require('mongoose')

const todoSchema = mongoose.Schema(
  {
    progression: {
      type: Boolean,
      default: false
    },
    description: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    createdBy: {
      type: String,
      required: [true, 'Please provide user']
    }
  },
  { timestamps: true }
)

const Todo = mongoose.model('Todos', todoSchema)

module.exports = Todo
