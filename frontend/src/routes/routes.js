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
import {Opinions} from  '../pages/Opinions'
import {Vacancies} from  '../pages/Vacancies'
import {Help} from  '../pages/Help'


export const useRoutes = isAuthenticated => {
    if (isAuthenticated){
        return (
            <Switch>
                 <Route path ="/mainPage" exact>
                    <MainPage />
                </Route>

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
                <Route path ="/courses" exact>
                    <ListCourses/>
                </Route>

                <Route path ="/" exact>
                <MainPage />
                </Route>
            
            </Switch>
        )
    }else{

    

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
            <Route path ="/opinions" exact>
                <Opinions/>
            </Route>
            <Route path ="/vacancies" exact>
                <Vacancies/>
            </Route>
            <Route path ="/help" exact>
                <Help/>
            </Route>
            <Route path ="/courses" exact>
                 <ListCourses/>
            </Route>

            <Route path ="/" exact>
                <MainPage />
            </Route>
        

         </Switch>
      )
    }

}
