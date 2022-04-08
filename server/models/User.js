const { default: mongoose } = require('mongoose')

const userSchema = mongoose.Schema(
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
const User = mongoose.model('User', userSchema)
module.exports = User
