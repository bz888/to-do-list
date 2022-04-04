import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
// import { useNavigate } from 'react-router-dom'

function Home () {
  const { loginWithRedirect, user, logout } = useAuth0()
  useEffect(() => {
    console.log(user)
  }, [user])
  // const navigate = useNavigate()
  // console.log(user)

  // user: bz888dev@gmail.com
  // password: testing>123

  // {
  //   redirectUri: `${window.location.origin}/register`
  // }

  return (
    <div>
      <h1>welcome to your to do list</h1>
      {/* {user} */}
      <IfNotAuthenticated>
        <button onClick={() => loginWithRedirect({})}>Login</button>
      </IfNotAuthenticated>

      <IfAuthenticated>
        <button onClick={() => logout()}>Logout</button>
      </IfAuthenticated>
    </div>
  )
}

export default Home
