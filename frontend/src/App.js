import React from 'react'
import {useRoutes} from './routes/routes'
import {BrowserRouter as Router} from 'react-router-dom'
import { SuppaNav} from './components/nav'
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext'

function App() {
const {token, login, logout, userId} = useAuth
const isAuthenticated = !!token
const routes = useRoutes(isAuthenticated)


return (
    <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
        <Router>
          <SuppaNav />
          <div className="container">
          {routes}
          </div>
        </Router>
    </AuthContext.Provider>
    )
}

export default App