export interface formVals {
  user: string;
  password: string;
}

export interface mockData {
  progression: boolean;
  details: string;
  date: string;
}

export interface UserAction {
  auth0Id: string | undefined;
  email: string | undefined;
  token: string;
}
export interface State {
  user: UserAction;
  todoList: TodoState;
}

export type ActiveUser = string

export interface todoItem {
  _id: string;
  progression: boolean;
  description: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  __v: number;
}
export interface ListItem {
  progression: boolean;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export type TodoState = {
  todoList: todoItem[]
}

export type TodoAction = {
  type: string
  todos: todoItem[]
}

export type DispatchTodoType = (args: TodoAction) => TodoAction

export interface todoPostAPI {
  todo: {
    description: string
    progression: boolean
  }
}
