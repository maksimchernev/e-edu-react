import React from 'react'
import {useRoutes} from './routes/routes'
import {BrowserRouter as Router} from 'react-router-dom'
import { SuppaNav} from './components/nav'


function App() {

const routes = useRoutes()

return (
    <Router>
      <SuppaNav />
      <div className="container">

      {routes}
      </div>
    </Router>
)
}

export default App