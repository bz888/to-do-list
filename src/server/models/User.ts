import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    auth0Id: {
      type: String,
      required: [true, 'auth0 needed']
    },
    email: {
      type: String,
      required: [true, 'email required']
    }
  }
)
export const User = model('User', userSchema)
