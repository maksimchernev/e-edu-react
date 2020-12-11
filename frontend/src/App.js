import React from 'react'
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