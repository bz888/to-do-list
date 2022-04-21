import { ActionIcon, Blockquote, Box, Checkbox, Group, Switch, Overlay } from '@mantine/core'
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
  <Group position = 'center'>
    {/* <Box sx={{ height: 100, position: 'relative' }}> */}
      {/* {visible && <Overlay opacity={0.6} color="#000" blur={2} />} */}
      <Checkbox color='lime' radius='xl' id={_id} onChange={handleCheck} checked={progression} />
      <Blockquote icon={ null }cite={createdAt.slice(0, 25)}>{description}
      {/* <p>Created At: {createdAt}</p> */}
      <p>Last updated: {updatedAt.slice(0, 25)}</p>
      <ActionIcon onClick={handleDelete}>
        <Trash
          size={18}
          color={'#d27979'}/>
      </ActionIcon>
      </Blockquote>
    {/* </Box> */}
  </Group>
  )
}
{ /* <Group key={index} mt="xs">
      <TextInput
        placeholder="John Doe"
        required
        sx={{ flex: 1 }}
        {...form.getListInputProps('employees', index, 'name')}
      />
      <Switch label="Active" {...form.getListInputProps('employees', index, 'active')} />
      <ActionIcon
        color="red"
        variant="hover"
        onClick={() => form.removeListItem('employees', index)}
      >
        <Trash size={16} />
      </ActionIcon>
    </Group> */ }
