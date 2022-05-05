// import { getAllTodosAPI } from '../api/todos'
// import { DispatchTodoType, todoItem } from '../types/types'
// import { showError } from './error'

// export const TODOLIST_PENDING = 'TODOLIST_PENDING'
// export const TODOLIST_SUCCESS = 'TODOLIST_SUCCESS'

// interface IActions {
//   TODOLIST_SUCCESS: string;
// }

// interface todoListType {
//   type: IActions['TODOLIST_SUCCESS']
//   todoList?: todoItem[]
// }

// export function fetchTodoListPending () {
//   console.log('fetch pending')
//   return {
//     type: TODOLIST_PENDING
//   }
// }

// export function fetchTodoListSuccess (todos: todoItem[]) {
//   return {
//     type: TODOLIST_SUCCESS,
//     todos
//   }
// }

// export function fetchTodoList (token: string) {
//   console.log('fetchTodoList hit')
//   // what is dispatch type ???
//   return (dispatch: (args: todoListType)=> (todoListType)) => {
//     dispatch(fetchTodoListPending())
//     return getAllTodosAPI(token)
//       .then(todolist => {
//         console.log('fetch func action hit')
//         dispatch(fetchTodoListSuccess(todolist))
//         return null
//       })
//       .catch(err => {
//         console.error(err)
//         const errMessage = err.response?.text || err.message
//         dispatch(showError(errMessage))
//       })
//   }
// }

// export function fetchTodos (token: string) {
//   return (dispatch: DispatchTodoType) => {
//     dispatch(fetchTodoListPending())
//   }
// }
// redux R

// A's props dispatch to R {A's data, D's Data}
// D needs A's prop
// D
// A -> B -> C -> D
