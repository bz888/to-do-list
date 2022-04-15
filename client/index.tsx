import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
import store from './store'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Auth0Provider
    domain='dev-ll77ct3d.au.auth0.com'
    clientId='j8UD4h1MvV9mjpV61dWkONmY5qw95y9J'
    redirectUri={window.location.origin}
    audience='https://todos/api'
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
