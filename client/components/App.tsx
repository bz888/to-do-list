import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { cacheUser } from '../auth0-utils'
import Dashboard from './Dashboard'
import Home from './Home'

function App () {
  // console.log('app hit')

  cacheUser(useAuth0)
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App
