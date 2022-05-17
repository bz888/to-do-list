import { TODOLIST_SUCCESS } from '../actions/todos'
import { TodoAction } from '../types/types'

// interface Action {
//   type: string;
//   todos: todoItem[]
// }

export function todoList (state = [], action: TodoAction) {
  switch (action.type) {
    case TODOLIST_SUCCESS:
      console.log('todo reducer: ', action)
      return action.todos
    default:
      return state
  }
}
