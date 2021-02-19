import React, { useCallback, useContext, useEffect, useState } from 'react'
import {Button, Row, Col} from 'react-bootstrap';
import { CourseCard } from '../components/coursecard';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hooks';

export const MyCourses = () => {

    const [cardInfo, setCardInfo] = useState(null)
    const {request,loading} = useHttp()
    const [rendered, setRendered] = useState(false);
    const auth = useContext(AuthContext)
    const [user,setUser] = useState('')
    const [count, setCount] = useState(6);

    const getCourses = useCallback( async (user) => {
        try{

          const data = await request(`/api/data/getCourses`,'POST', user.favorites)

          setCardInfo(data)


        }catch(e){
        }

    }, [request])

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

        if( !rendered ) {
            setRendered(true);
        }

       }, [getFavorites,rendered])


    return (
      <div className="mainpage-grid pb-5">
          <Row>
              <Col sm="12" className="title">
                  <h1>Мои курсы</h1>
                  {cardInfo && <CourseCard cardInfo = {cardInfo} user = {user} count = {count} />}
                  <Row className="showMoreBlock">
              <Col sm={{ span: 2, offset: 5 }} className="my-auto">
                <Button onClick={() => setCount(count + 6)} className="showMoreButton" >Показать больше</Button>
              </Col>
            </Row>
              </Col>
          </Row>
      </div>
    )
}