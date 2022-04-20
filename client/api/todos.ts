import request from 'superagent'
import { todoPostAPI } from '../types/types'

const rootURL = '/api/v1'

function logError (err: ErrorEvent) {
  if (err.message === 'Forbidden') {
    throw new Error('Only authicated users may access')
  } else {
    console.error(
      'Erro consuming the API (client side/api.js)',
      err.message
    )
  }
}

export function getAllTodosAPI (token: string) {
  return request.get(`${rootURL}/todos/get/testing`)
    .set('authorization', `Bearer ${token}`)
    .then(res => {
      // console.log('api: ', res.body)
      return res.body
    })
    .catch(logError)
}

export function addTodoAPI (todo: todoPostAPI, token: string) {
  return request.post(`${rootURL}/todos/post/testing`)
    .set('authorization', `Bearer ${token}`)
    .send(todo)
    .then(res => res.body.todoDB)
}
