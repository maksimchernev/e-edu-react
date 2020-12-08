import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import { MainPage } from '../pages/MainPage'
import { RegisterPage } from '../pages/RegisterPage'
import { PersonalAccount } from '../pages/PersonalAccount'
import {About} from '../pages/About'
import {ListCourses} from '../pages/Courses'
import {OurPartners} from '../pages/PartnersPage'
import {MyCourses} from '../pages/MyCourses'
import {Settings} from  '../pages/Settings'
export const useRoutes = isAuthenticated => {
    if (isAuthenticated){
        return (
            <Switch>
                <Route path ="/personalAccount" exact>
                    <PersonalAccount />
                </Route>
                <Route path ="/aboutUs" exact>
                    <About/>
                </Route>
                <Route path ="/listOfCourses" exact>
                    <ListCourses/>
                </Route>
                <Route path ="/partners" exact>
                    <OurPartners/>
                </Route>
                <Route path ="/myCourses" exact>
                    <MyCourses/>
                </Route>
                <Route path ="/settings" exact>
                    <Settings/>
                </Route>

                <Redirect to="/personalAccount" />
            </Switch>
        )
    }
    return(
        <Switch>
            <Route path ="/mainPage" exact>
                <MainPage />
            </Route>

            <Route path ="/RegisterPage" exact>
                <RegisterPage/>
            </Route>

            <Route path ="/aboutUs" exact>
                <About/>
            </Route>

            <Route path ="/listOfCourses" exact>
                <ListCourses/>
            </Route>
            <Route path ="/partners" exact>
                <OurPartners/>
            </Route>

            <Redirect to="/mainPage" />
         </Switch>
    )

}
