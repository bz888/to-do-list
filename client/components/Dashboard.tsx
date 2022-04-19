import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, SyntheticEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchTodoList } from '../actions/todos'
import { getAllTodosAPI } from '../api/api'
import { ActiveUser, TodoState, State, UserAction, todoItem } from '../types/types'
import ListItem from './ListItem'

export default function Dashboard () {
  const userStore = useSelector<State, UserAction>(state => state.user)
  const todoListStore = useSelector<State, TodoState>(state => state.todoList)
  const [todoList, setTodoList] = useState<todoItem[]>([])
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
    console.log('userStore useEffect init', userStore)
    if (token !== '') {
      // fetchTodoList(token)
      getTodoList(token)
      // console.log('todo List', todoListStore)
    }
  }, [userStore])

  // const mockData = [
  //   { progression: false, details: 'do some code', date: '31/03/2022' },
  //   { progression: false, details: 'do some more code', date: '31/03/2022' },
  //   { progression: false, details: 'try some typescript', date: '31/03/2022' }
  // ]
  function handleLogout (e : SyntheticEvent) {
    e.preventDefault()
    logout()
  }
  return (
    <>
      <h1>Your List</h1>
      <button onClick={handleLogout}>Logout</button>
      {todoList.map((todo) => {
        return (
          <ListItem
            key={todo._id}
            progression={todo.progression}
            description={todo.description}
            createdAt={todo.createdAt}
            updatedAt={todo.updatedAt}
          />
        )
      })

      }
    </>
  )
}
