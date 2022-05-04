import { useAuth0 } from '@auth0/auth0-react'
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { cacheUser } from '../auth0-utils'
import { MantineProvider, Button, ActionIcon, ColorSchemeProvider, ColorScheme, GlobalStyles } from '@mantine/core'
import { Bulb, BulbOff } from 'tabler-icons-react'

import Dashboard from './Dashboard'
import Home from './Home'
import SignedIn from './SignedIn'
import { IfAuthenticated } from './Authenticated'

// import Login from './Login'

function App () {
  cacheUser(useAuth0)
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
  function handleColorScheme (value?: ColorScheme) {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  }
  const dark = colorScheme === 'dark'
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={handleColorScheme}>
      <MantineProvider theme={{ fontFamily: 'IBM Plex Mono, monospace', colorScheme, headings: { fontFamily: 'IBM Plex Mono, monospace' } }} withGlobalStyles>
        <Routes>
          <Route path='/' element={<Home />}/>

            <Route path='dashboard' element={<Dashboard />}/>

          <Route path='signedin' element={<SignedIn/>}/>
        </Routes>
        <ActionIcon style={{ position: 'fixed', top: '95vh', left: '20vw' }}
        onClick={() => handleColorScheme()}
        title="Toggle color scheme"
        >
        {dark ? <BulbOff size={18} /> : <Bulb size={18} />}
        </ActionIcon>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
