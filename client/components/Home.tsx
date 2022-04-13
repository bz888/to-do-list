import { useAuth0 } from '@auth0/auth0-react'
import React, { SyntheticEvent, useEffect } from 'react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Home () {
  const { loginWithRedirect, user, logout } = useAuth0()
  useEffect(() => {
    console.log(user)
  }, [user])
  // const navigate = useNavigate()
  // console.log(user)

  // user: bz888dev@gmail.com
  // password: testing>123

  function handleLogin (e: SyntheticEvent) {
    e.preventDefault()
    loginWithRedirect()
  }

  function handleLogout (e: SyntheticEvent) {
    e.preventDefault()
    logout()
  }
  return (
    <div>
      <h1>welcome to your to do list</h1>
      {/* {user} */}
      <IfNotAuthenticated>
        <button onClick={handleLogin}>Login</button>
      </IfNotAuthenticated>

      <IfAuthenticated>
        <button onClick={handleLogout}>Logout</button>
      </IfAuthenticated>
    </div>
  )
}

export default Home
