import request from 'superagent'
import { postFormType, updateType } from '../types/types'

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

export function addTodoAPI (todo: postFormType, token: string) {
  return request.post(`${rootURL}/todos/post/testing`)
    .set('authorization', `Bearer ${token}`)
    .send({ todo })
    .then(res => res.body.todoDB)
    .catch(logError)
}

export function patchTodoAPIParams (todo: updateType, token: string) {
  return request.patch(`${rootURL}/todos/update/testing/${todo._id}`)
    .set('authorization', `Bearer ${token}`)
    .send({ todo })
    .then(res => res.body.todoDB)
    .catch(logError)
}

export function patchTodoAPI (todo: postFormType, token: string) {
  console.log('patchTodoAPI: ', todo)

  return request.patch(`${rootURL}/todos/update/testing/`)
    .set('authorization', `Bearer ${token}`)
    .send({ todo })
    .then(res => res.body.todoDB)
    .catch(logError)
}

export function deleteTodoAPIParams (id: string, token: string) {
  return request.delete(`${rootURL}/todos/delete/testing/${id}`)
    .set('authorization', `Bearer ${token}`)
    .then(res => res.body.todoDB)
    .catch(logError)
}
