import React, { useCallback, useContext, useEffect, useState } from 'react'
import  {Slider}  from '../components/slider'
import  {CourseCard}  from '../components/coursecard'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hooks'
import "../сss/mainpage.css"

export const MainPage = () => { 

    
  const [cardInfo, setCardInfo] = useState(null) 
  const {request,loading} = useHttp()
  const [rendered, setRendered] = useState(false);
  const auth = useContext(AuthContext)
  const [user,setUser] = useState(null)


  const getUser = useCallback( async () => {
    try{
      const data = await request(`/api/data/getData/${auth.userId}`,'GET',null,{ 
            Authorization: `Bearer ${auth.token}`
        })

        setUser(data)

    }catch(e){
    }
  
}, [auth.token,auth.userId,request])


    const getCourses = useCallback( async () => {
        try{
    
          const data = await request(`/api/data/getCourses`,'POST',null)
    
          setCardInfo(data)
    
    
        }catch(e){
        }
      
    }, [request])

    useEffect( () => {
       
        if(rendered){
            getCourses()
            getUser()
        }
        
        if( !rendered ) {
            setRendered(true);
        }
       
       }, [getUser, getCourses,rendered])  


    return (
        <div className="mainpage-grid">
            <Slider />
                {cardInfo && <CourseCard cardInfo = {cardInfo} user = {user}/>}
            </div>
    );
}