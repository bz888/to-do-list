import { useAuth0 } from '@auth0/auth0-react'
import React, { SyntheticEvent } from 'react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { Button, Title, Center, Group, Stack } from '@mantine/core'
// import { useStyles } from '../styles/mantineStyles'
import { useNavigate } from 'react-router-dom'

function Home () {
  const { loginWithRedirect, logout } = useAuth0()
  // useEffect(() => {
  //   // console.log(user)
  // }, [user])
  const navigate = useNavigate()

  function handleLogin (e: SyntheticEvent) {
    e.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/signedin`
    })
  }

  function handleLogout (e: SyntheticEvent) {
    e.preventDefault()
    logout({
      returnTo: window.location.origin
    })
  }

  function handleRedirect (e: SyntheticEvent) {
    e.preventDefault()
    navigate('/dashboard')
  }
  return (
   <Center style={{ height: '100vh' }}>
    <Stack align='center'>
      <div>
        <Title>welcome to your to do list</Title>
      </div>

      <div>
        <IfNotAuthenticated>
          <Group position='center' spacing = 'xl'>
            <Button variant="subtle" color="dark" onClick={handleLogin}>Login</Button>
            <Button variant="subtle" color="dark" onClick={handleLogin}>SignUp</Button>
          </Group>
        </IfNotAuthenticated>
      </div>
      <div>
        <IfAuthenticated>
          <Group position='center' spacing = 'xl'>
            <Button variant="subtle" color="dark" onClick={handleRedirect}>Contine</Button>
            <Button variant="subtle" color="dark" onClick={handleLogout}>Logout</Button>
          </Group>
        </IfAuthenticated>
      </div>
      </Stack>
   </Center>
  )
}

export default Home
