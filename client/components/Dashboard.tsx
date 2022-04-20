import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@mantine/core'
import React, { useEffect, SyntheticEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchTodoList } from '../actions/todos'
import { getAllTodosAPI } from '../api/todos'
import { ActiveUser, TodoState, State, UserAction, todoItem } from '../types/types'
import AddTodo from './AddTodo'
import { IfAuthenticated } from './Authenticated'
import ListItem from './ListItem'

export default function Dashboard () {
  const userStore = useSelector<State, UserAction>(state => state.user)
  // const todoListStore = useSelector<State, TodoState>(state => state.todoList)
  const [todoList, setTodoList] = useState<todoItem[]>([])
  const [modal, setModal] = useState<boolean>(false)
  const [toggle, setToggle] = useState<boolean>(false)
  const { user, isAuthenticated } = useAuth0()
  const navigate = useNavigate()
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
    // console.log('userStore useEffect init', userStore)
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
    setModal(!modal)
  }
  return (
    <>
      <Button onClick={handleClick}>Add New To do</Button>
      {modal && <AddTodo
        token={token}
        setToggle={setToggle}
        toggle={toggle}
        setModal={setModal}
      />}
      <h1>Your List</h1>
      <button onClick={handleLogout}>Logout</button>
      {todoList.map((todo, idx) => {
        return (
          <ListItem
            key={idx}
            token={token}
            todoItem={todo}
            setToggle={setToggle}
            toggle={toggle}
          />
        )
      })

      }
    </>
  )
}
