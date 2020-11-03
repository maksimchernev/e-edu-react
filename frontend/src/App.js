import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import {useRoutes} from './routes/routes'
import {BrowserRouter as Router} from 'react-router-dom'
/*export class App extends Component {

  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
    
    
  }
  render() {
    return (
      <div>
        <GoogleLogin
        clientId="272019474369-kophotlk5a37las0qp48o4db5qs8uu1a.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
        
        />
      </div>
    )
  }
}
*/

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