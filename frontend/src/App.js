import React from 'react'
import {useRoutes} from './routes/routes'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {

const routes = useRoutes()

return (
    <Router>
      <div className="container">
      {routes}
      </div>
    </Router>
)
}

export default App