import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import { MainPage } from '../pages/MainPage'
import { RegisterPage } from '../pages/RegisterPage'
import { PersonalAccount } from '../pages/PersonalAccount'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated){
        return (
            <Switch>
                <Route path ="/personalAccount" exact>
                    <PersonalAccount />
                </Route>
                <Redirect to="/personalAccount" />
            </Switch>
        )
    }
    return(
        <Switch>
            <Route path ="/loginPage" exact>
                <MainPage />
            </Route>

            <Route path ="/RegisterPage" exact>
                <RegisterPage/>
            </Route>

        </Switch>
    )

}
