import request from 'superagent'
import { UserAction } from '../types/types'

const rootURL = '/api/v1'

function logError (err: ErrorEvent) {
  if (err.message === 'Forbidden') {
    throw new Error('user is unauthicated')
  } else {
    console.error(
      'Erro consuming the API (client side/api.js)',
      err.message
    )
  }
}

export function addUser (user: UserAction) {
  // console.log('api user: ', user)
  return request.post(`${rootURL}/users/`)
    .send({ user })
    .then(res => res.body)
    .catch(logError)
}

export function checkUserByAuth (uid: string | undefined, token: string) {
  return request.post(`${rootURL}/users/checkuser/${uid}`)
    .set('authorization', `Bearer ${token}`)
    .send({ token })
    .then(res => res.body)
    .catch(logError)
}
