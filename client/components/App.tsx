import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { cacheUser } from '../auth0-utils'
import Dashboard from './Dashboard'
import Home from './Home'
// import Login from './Login'

function App () {
  // console.log('app hit')

  cacheUser(useAuth0)
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='dashboard' element={<Dashboard />} />
      {/* <Route path='login' element={<Login/>}/> */}
    </Routes>
  )
}

export default App
