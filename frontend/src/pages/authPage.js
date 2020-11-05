import React from 'react'
import GoogleLogin from 'react-google-login'
import SuppaNav from '../components/nav.js'

export const AuthPage = () => { 

    const responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
        
        
      }

    return (
        <div>
            <SuppaNav></SuppaNav>
            <h1>AuthPage</h1>
                <GoogleLogin
                    clientId="272019474369-kophotlk5a37las0qp48o4db5qs8uu1a.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
        </div>
    )
}