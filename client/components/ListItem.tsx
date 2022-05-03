import { ActionIcon, Blockquote, Box, Checkbox, Group, Switch, Overlay, AccordionItem, Accordion } from '@mantine/core'
import { useHover } from '@mantine/hooks'
import React, { Dispatch, SetStateAction, SyntheticEvent, useEffect, useRef, useState } from 'react'
import { Cheese, Trash } from 'tabler-icons-react'
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
  // const [visible, setVisible] = useState(false)
  // useEffect(() => {
  //   if (progression) {
  //     setVisible(true)
  //   }
  // }, [progression])

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
    <Group position='center'>
        <Checkbox color='lime' radius='xl' id={_id} onChange={handleCheck} checked={progression} />
        <ActionIcon onClick={handleDelete}>
          <Trash
            size={18}
            color={'#d27979'}/>
        </ActionIcon>
        <Blockquote icon={ null }cite={createdAt.slice(0, 25)}>{description}
        <p>Last updated: {updatedAt.slice(0, 25)}</p>
        </Blockquote>
    </Group>

  )
}
