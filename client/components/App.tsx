import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Home from './Home'

function App() {
  console.log('app hit')
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
