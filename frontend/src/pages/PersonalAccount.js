import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hooks'
import { useMessage } from '../hooks/message.hooks'
import  {Slider}  from '../components/slider'
import  {CourseCard}  from '../components/coursecard'
import  {Footer}  from '../components/footer'

export const PersonalAccount = () => {

  const [user,setUser] = useState(null)  
  const message = useMessage()
  const auth = useContext(AuthContext)
  const {loading, request} = useHttp() 
  const [rendered, setRendered] = useState(false);
  
  const getUser = useCallback( async () => {
    try{
      const data = await request(`/api/data/getData/${auth.userId}`,'GET',null,{ 
            Authorization: `Bearer ${auth.token}`
        })
        
        setUser(data)
    }catch(e){
    }
  
}, [auth.token,auth.userId, request])

useEffect(() => {
  if(rendered){
      getUser()
  }
  
  if( ! rendered ) {
      setRendered(true);
  }
}, [getUser,rendered]);


    return (
        <div>
            <h1>Мои курсы</h1>
            <CourseCard />
            <Footer />
        </div>
    )
}