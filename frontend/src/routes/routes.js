import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import { MainPage } from '../pages/MainPage'
import { RegisterPage } from '../pages/RegisterPage'

export const useRoutes = () => { 

    return (
        <Switch>
        <Route path ="/loginPage" exact>
            <MainPage />
        </Route>

        <Route path ="/RegisterPage" exact>
            <RegisterPage/>
        </Route>

        <Redirect to="/loginPage"/>



        </Switch>

    )

}
