import { Button, Loader } from '@mantine/core'
import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser, checkUserByAuth } from '../api/user'
import { formVals, State, UserAction } from '../types/types'

function SignedIn () {
  const userStore = useSelector<State, UserAction>(state => state.user)
  // const [registeredUser, setRegisteredUser] = useState(false)
  // loading change to global state
  const navigate = useNavigate()
  const { email, token } = userStore
  const [loading, setLoading] = useState(false)
  async function userChecker () {
    console.log(userStore.token)

    checkUserByAuth(email, token)
      .then(userData => {
        console.log(userData)

        if (userData === null) { addUser(userStore) }
        return null
      })
      .then(() => {
        setLoading(false)
      })
      .catch(() => {
        navigate('/')
      })
  }

  useEffect(() => {
    setLoading(() => true)
    userChecker()
  }, [userStore])

  console.log('userStore, SignedIn component: ', userStore)
  async function handleClick (e: SyntheticEvent) {
    e.preventDefault()
    if (!userStore) {
      console.log('Error Setting user')
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <div>
      {
        loading
          ? <Loader color="grape" size="xl" variant="dots" />
          : <Button variant="subtle" color="dark" onClick={handleClick}>Continue</Button>
      }

    </div>
  )
}

export default SignedIn
