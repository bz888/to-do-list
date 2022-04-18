import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, SyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import ListItem from './ListItem'

export default function Dashboard () {
  const { user, isAuthenticated } = useAuth0()
  const navigate = useNavigate()
  useEffect(() => {
    // if (isAuthenticated === false) {
    //   navigate('/')
    // }
    console.log(user)
  }, [user])

  const { logout } = useAuth0()
  const mockData = [
    { progression: false, details: 'do some code', date: '31/03/2022' },
    { progression: false, details: 'do some more code', date: '31/03/2022' },
    { progression: false, details: 'try some typescript', date: '31/03/2022' }
  ]
  function handleLogout (e : SyntheticEvent) {
    e.preventDefault()
    logout()
  }
  return (
    <>
      <h1>Your List</h1>
      <button onClick={handleLogout}>Logout</button>
      {mockData.map((data, idx) => {
        return (
          <ListItem
            key={idx}
            progression={data.progression}
            details={data.details}
            date={data.date}
          />
        )
      })

      }
    </>
  )
}
