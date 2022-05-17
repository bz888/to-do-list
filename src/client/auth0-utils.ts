import { useAuth0 } from '@auth0/auth0-react'
import { setUser } from './actions/user'
import store from './store'

type Auth0Hook = typeof useAuth0

export async function cacheUser (useAuth0: Auth0Hook) {
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()
  if (isAuthenticated) {
    try {
      // async keyword, can use .then, this is a promise
      const accessToken = await getAccessTokenSilently()

      const userToSave = {
        auth0Id: user?.sub,
        email: user?.email,
        token: accessToken
      }
      // console.log('store dispatch: ', userToSave)
      // almost need to dispatch to db
      store.dispatch(setUser(userToSave))
    } catch (err) {
      console.error(err)
    }
  }
}
