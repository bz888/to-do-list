import { Schema, model } from 'mongoose'

const todoSchema = new Schema(
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

export const Todo = model('Todos', todoSchema)

// module.exports = Todo
