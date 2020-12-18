import React, { useCallback, useContext, useEffect, useState } from 'react'
import  {Slider}  from '../components/slider'
import  {CourseCard}  from '../components/coursecard'
import  {Footer}  from '../components/footer'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hooks'

export const MainPage = () => { 

    
  const [cardInfo, setCardInfo] = useState(null)  

  const auth = useContext(AuthContext)
  const {request,loading} = useHttp()
  const [rendered, setRendered] = useState(false);

    const getCourses = useCallback( async () => {
        try{
    
          const data = await request(`/api/data/getCourses`,'GET',null)
    
          setCardInfo(data)
    
    
        }catch(e){
        }
      
    }, [auth.token,request])

    useEffect( () => {
       
        if(rendered){
            getCourses()
        }
        
        if( ! rendered ) {
            setRendered(true);
        }
       
       }, [getCourses,rendered])  


    return (
        <div>
            <Slider />
                <h1>Популярные курсы</h1>
                { cardInfo && <CourseCard cardInfo = {cardInfo} />}
            <Footer />
        </div>    
    );
}