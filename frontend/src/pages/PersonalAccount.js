import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hooks'
import  {CourseCard}  from '../components/coursecard'
import  {Footer}  from '../components/footer'
import {Row, Col, Container} from 'react-bootstrap';

export const PersonalAccount = () => {

  const [user,setUser] = useState(null)  
  const auth = useContext(AuthContext)
  const {request} = useHttp() 
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
            <Container>
                <Row>
                    <Col sm="12" className="title">
                        <h1>Мои курсы</h1>
                    </Col>
                </Row>
            </Container>
            <CourseCard />
            <Footer />
        </div>
    )
}