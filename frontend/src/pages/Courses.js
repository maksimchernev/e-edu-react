import React, { useCallback, useContext, useEffect, useState } from 'react'
import  {CourseCard}  from '../components/coursecard'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hooks'
import {Button, Row, Col} from 'react-bootstrap'

export const ListCourses = () => {
const [cardInfo, setCardInfo] = useState(null)

  const [count, setCount] = useState(6);
  const auth = useContext(AuthContext)
  const {request,loading} = useHttp()
  const [rendered, setRendered] = useState(false);
  const [user,setUser] = useState('')

    const getCourses = useCallback( async () => {
        try{

          const data = await request(`/api/data/getCourses`,'POST',null)

          setCardInfo(data)


        }catch(e){
        }

    }, [auth.token,request])

    const getFavorites = useCallback( async () => {
      try{
        const data = await request(`/api/data/getData/${auth.userId}`,'GET',null,{ 
              Authorization: `Bearer ${auth.token}`
          })
          setUser(data)
          getCourses(data)
  
      }catch(e){
      }
    
  }, [auth.token,auth.userId,request,getCourses,setUser])

    useEffect( () => {

        if(rendered){
          getFavorites()
        }

        if( ! rendered ) {
            setRendered(true);
        }

       }, [getCourses,rendered])

    return (
          <div>
            <div className="filters-grid">

              { cardInfo && <CourseCard cardInfo = {cardInfo} user = {user}/>}
            </div>
            <Row className="showMoreBlock">
              <Col sm={{ span: 2, offset: 5 }} className="my-auto">
                <Button onClick={() => setCount(count + 6)} className="showMoreButton">Показать больше</Button>
              </Col>
            </Row>
            
          </div>
    )
}