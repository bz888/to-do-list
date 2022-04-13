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
    domain='dev-9lx-84xw.au.auth0.com'
    clientId='yf0pQKU7ZqdyYC03yXsYS394jYlDcrG5'
    redirectUri={window.location.origin}
    audience='https//todos/api'
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
