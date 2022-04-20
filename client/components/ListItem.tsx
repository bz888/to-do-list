import { ActionIcon } from '@mantine/core'
import { useHover } from '@mantine/hooks'
import React, { Dispatch, SetStateAction, SyntheticEvent, useRef, useState } from 'react'
import { Trash } from 'tabler-icons-react'
import { deleteTodoAPIParams, patchTodoAPI, patchTodoAPIParams } from '../api/todos'
import { ListItem } from '../types/types'

interface ListItemObj {
  _id: string
  progression: boolean
  description: string
  createdAt: string
  updatedAt: string
}
interface ListItemProp {
  token: string
  toggle: boolean
  setToggle: Dispatch<SetStateAction<boolean>>
  todoItem: ListItemObj
}

export default function ListItem (props: ListItemProp) {
  const { toggle, setToggle, token, todoItem } = props
  const { description, createdAt, _id, updatedAt, progression } = todoItem
  // const [updateTodo, setUpdateTodo] = useState<ListItemObj>(todoItem)

  async function handleCheck (e: SyntheticEvent) {
    // e.preventDefault()
    // await patchTodoAPI({ ...todoItem, progression: !progression }, token)
    await patchTodoAPIParams({ ...todoItem, progression: !progression }, token)
    setToggle(!toggle)
  }

  function handleDelete () {
    deleteTodoAPIParams(_id, token)
    setToggle(!toggle)
  }
  return (
    <div>
      <form>
        <input type="checkbox" id={_id} onChange={handleCheck} checked={progression} />
        <p>Description: {description}</p>
        <p>Created At: {createdAt}</p>
        <p>Last updated: {updatedAt}</p>
        <ActionIcon onClick={handleDelete}>
          <Trash
            size={18}
            color={'#d27979'}/>
        </ActionIcon>
      </form>
    </div>
  )
}
