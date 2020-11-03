import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import {AuthPage} from '../pages/authPage'

export const useRoutes = () => { 

    return (
        <Switch>
        <Route path ="/loginPage" exact>
            <AuthPage />
        </Route>

        <Redirect to="/loginPage"/>
        </Switch>
    )

}
