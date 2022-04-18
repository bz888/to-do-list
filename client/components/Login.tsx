import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { formVals } from '../types/types'

function Login () {
  const [input, setInput] = useState<formVals>({ user: '', password: '' })

  const navigate = useNavigate()

  function handleChange (e: ChangeEvent<HTMLInputElement>) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit (e: SyntheticEvent) {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div>
      <h1>Welcome to your to do list</h1>
      <form>
        <label htmlFor="user">user: </label>
        <input type='text' value={input.user} name='user' onChange={handleChange} />

        <label htmlFor="password">password: </label>
        <input type='password' value={input.password} name='password' onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}

export default Login
