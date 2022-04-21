import { Button, Drawer, Group, Input } from '@mantine/core'
import React, { ChangeEvent, Dispatch, SetStateAction, SyntheticEvent, useState } from 'react'
import { Checklist, Plus } from 'tabler-icons-react'
import { addTodoAPI } from '../api/todos'
import { postFormType } from '../types/types'

interface Props {
  modal: boolean
  token: string,
  toggle: boolean
  setToggle: Dispatch<SetStateAction<boolean>>
  setModal: Dispatch<SetStateAction<boolean>>
}

export default function AddTodo (props: Props) {
  const { token, toggle, setToggle, setModal, modal } = props
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
    setModal(false)
    setToggle(!toggle)
  }
  return (

    <Drawer
      // transition="rotate-left"
      // transitionDuration={250}
      // transitionTimingFunction="ease"
      opened={modal}
      position="right"
      onClose={() => setModal(false)}
      title="Add New To do"
      padding="xl"
      size="xl">
      <Group spacing="xl">
        <label htmlFor='description'>Description: </label>
        <Input
          data-autofocus
          icon={<Checklist/>}
          variant="unstyled"
          type='text'
          placeholder="New To do"
          value={postForm.description}
          name='description'
          radius="xs"
          size="xs"
          onChange={handleChange}
        />
        <Button
          leftIcon={<Plus size={20}/>}
          variant="outline"
          color="indigo"
          radius="xs"
          size="md"
          compact
          onClick={handleSubmit}
        >Add</Button>
      </Group>
    </Drawer>

  )
}
