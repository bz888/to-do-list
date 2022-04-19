import request from 'superagent'

const roolURL = '/api/v1'

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
  return request.get(`${roolURL}/todos/get/testing`)
    .set('authorization', `Bearer ${token}`)
    .then(res => {
      // console.log('api: ', res.body)
      return res.body
    })
    .catch(logError)
}
