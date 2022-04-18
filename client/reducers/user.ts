import { SET_USER, CLEAR_USER } from '../actions/user'
import { UserAction } from '../types/types'

const emptyUser = {
  auth0Id: '',
  email: '',
  token: ''
}
interface Action {
  type: string;
  user: UserAction;
}

export default function user (state = emptyUser, action: Action) {
  switch (action.type) {
    case SET_USER:
      console.log(state)
      return action.user

    case CLEAR_USER:
      return emptyUser

    default:
      return state
  }
}
