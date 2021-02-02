import React, { useCallback, useContext, useEffect, useState } from 'react'
import  {Footer}  from '../components/footer'
import  {Filters}  from '../components/filters'
import  {CourseCard}  from '../components/coursecard'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hooks'

export const ListCourses = () => {
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
          <div className="filters-grid">

            { cardInfo && <CourseCard cardInfo = {cardInfo} />}
            <Footer />
          </div>
    )
}