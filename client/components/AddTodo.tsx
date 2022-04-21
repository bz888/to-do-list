import React, { ChangeEvent, Dispatch, SetStateAction, SyntheticEvent, useState } from 'react'
import { addTodoAPI } from '../api/todos'
import { postFormType } from '../types/types'

interface Props {
  token: string,
  toggle: boolean
  setToggle: Dispatch<SetStateAction<boolean>>
  setModal: Dispatch<SetStateAction<boolean>>
}

export default function AddTodo (props: Props) {
  const { token, toggle, setToggle, setModal } = props
  const initPostState = { description: '', progression: false }
  const [postForm, setPostForm] = useState<postFormType>(initPostState)
  function handleChange (e: ChangeEvent<HTMLInputElement>) {
    setPostForm({
      ...postForm,
      [e.target.name]: e.target.value
    })
  }
  async function handleSubmit (e: SyntheticEvent) {
    e.preventDefault()
    await addTodoAPI(postForm, token)
    setPostForm({ ...initPostState })
    setToggle(!toggle)
    setModal(false)
  }
  return (
  <>
    <form>
      <label htmlFor='description'>Description: </label>
      <input type='text' value={postForm.description} name='description' onChange={handleChange}/>
      <button onClick={handleSubmit}>Add</button>
    </form>
  </>
  )
}
