import React, { useEffect } from 'react'
import {useRoutes} from './routes/routes'
import {BrowserRouter as Router} from 'react-router-dom'
import  {Nav_}  from './components/nav'
import  {Usernav} from './components/usernav'
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext.js'

function App() {

  
const {token, login, logout, userId} = useAuth()
const isAuthenticated = !!token
const routes = useRoutes(isAuthenticated)

/*useEffect(() => {

  const _onInit = auth2 => {
    console.log('init OK', auth2)
  }
  const _onError = err => {
    console.log('error', err)
  }

    
    window.gapi.load('auth2', function() {
    window.gapi.auth2
      .init({
        client_id:
          process.env.REACT_APP_GOOGLE_CLIENT_ID,
      })
      .then(_onInit, _onError)
  })
}, []);
*/

let navigation;
if (isAuthenticated==!!token) {
    navigation = <Nav_ />
  }
  else {
    navigation = <Usernav />
  }

return (
    <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
        <Router>
        {!isAuthenticated && <Nav_/>}
        {isAuthenticated && <Usernav/>}
          <div className="container">
          {routes}
          </div>
        </Router>
    </AuthContext.Provider>
    )
}

export default App