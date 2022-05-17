import { useAuth0 } from '@auth0/auth0-react'
import { Accordion, ActionIcon, Container, Group, Space, Title } from '@mantine/core'
// import { formList, useForm } from '@mantine/form'
import React, { useEffect, SyntheticEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { CirclePlus, Logout } from 'tabler-icons-react'
// import { useNavigate } from 'react-router-dom'
// import { fetchTodoList } from '../actions/todos'
import { getAllTodosAPI } from '../api/todos'
import { State, UserAction, todoItem } from '../types/types'
import AddTodo from './AddTodo'
// import { IfAuthenticated } from './Authenticated'
import ListItem from './ListItem'
// import Nav from './Nav'

export default function Dashboard () {
  const userStore = useSelector<State, UserAction>(state => state.user)
  // const todoListStore = useSelector<State, TodoState>(state => state.todoList)
  const [todoList, setTodoList] = useState<todoItem[]>([])
  // const todoForm = useForm({
  //   initialValues: {
  //     todos: formList(todoList)
  //   }
  // })
  const [modal, setModal] = useState<boolean>(false)
  const [toggle, setToggle] = useState<boolean>(false)
  // const { user, isAuthenticated } = useAuth0()
  // const navigate = useNavigate()
  const { token } = userStore
  const { logout } = useAuth0()

  function getTodoList (token: string) {
    getAllTodosAPI(token)
      .then(todoArray => {
        setTodoList(todoArray)
        return null
      })
      .catch(err => console.error(err.message))
  }

  useEffect(() => {
    console.log('userStore useEffect init', userStore)
    if (token !== '') {
      // fetchTodoList(token)
      getTodoList(token)
    }
  }, [userStore, toggle])

  function handleLogout (e : SyntheticEvent) {
    e.preventDefault()
    logout()
  }
  function handleClick (e: SyntheticEvent) {
    e.preventDefault()
    setModal(true)
  }

  return (
    <>
    <Space h='xl'/>
    <Container size={500}>
      <Group>
        <Title>Your List</Title>
        <ActionIcon onClick={handleClick}>
          <CirclePlus/>
        </ActionIcon>
        <ActionIcon onClick={handleLogout}>
          <Logout/>
        </ActionIcon>
      </Group>
      <Space h='xl'/>

      {
      <AddTodo
        modal={modal}
        token={token}
        setToggle={setToggle}
        toggle={toggle}
        setModal={setModal}
        />}

      <Accordion>
        {todoList.map((todo, idx) => {
          return (
          <Accordion.Item label={todo.description}>
            <ListItem
              key={idx}
              token={token}
              todoItem={todo}
              setToggle={setToggle}
              toggle={toggle}
            />
          </Accordion.Item>
          )
        })}
      </Accordion>
      {/* </Center> */}
      </Container>
    </>
  )
}
