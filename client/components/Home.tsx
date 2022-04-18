import { useAuth0 } from '@auth0/auth0-react'
import React, { SyntheticEvent, useEffect } from 'react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { Button, Title, Center, Group, SimpleGrid, Stack } from '@mantine/core'
import { useStyles } from '../styles/mantineStyles'

function Home () {
  // const { classes } = useStyles()
  const { loginWithRedirect, user, logout } = useAuth0()
  useEffect(() => {
    console.log(user)
  }, [user])
  // const navigate = useNavigate()
  // console.log(user)

  function handleLogin (e: SyntheticEvent) {
    e.preventDefault()
    loginWithRedirect()
  }

  function handleLogout (e: SyntheticEvent) {
    e.preventDefault()
    logout()
  }
  return (
   <Center style={{ height: '100vh' }}>
    <Stack align='center'>
      <div>
        <Title>welcome to your to do list</Title>
      </div>
      {/* {user} */}
      {/* <Group> */}
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
          <Button variant="subtle" color="dark" onClick={handleLogout}>Logout</Button>
        </IfAuthenticated>
      </div>
      {/* </Group> */}
      </Stack>
   </Center>

  // <div className={classes.wrapper}>
  //   <Title>welcome to your to do list</Title>
  //   {/* {user} */}
  //   <IfNotAuthenticated>
  //     <Button className={classes.child} onClick={handleLogin}>Login</Button>
  //   </IfNotAuthenticated>

  //   <IfAuthenticated>
  //     <Button className={classes.child} onClick={handleLogout}>Logout</Button>
  //   </IfAuthenticated>
  // </div>
  )
}

export default Home
