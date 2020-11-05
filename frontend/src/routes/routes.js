import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import {AuthPage} from '../pages/authPage'
import {Land} from '../pages/landos'
import {Entrance} from '../pages/entrance'

export const useRoutes = () => { 

    return (
        <Switch>
        <Route path ="/loginPage" exact>
            <AuthPage />
        </Route>
         <Route path ="/land" exact>
            <Land />
        </Route>
         <Route path ="/entrance" exact>
            <Entrance />
        </Route>
        <Redirect to="/loginPage"/>


        </Switch>

    )

}
