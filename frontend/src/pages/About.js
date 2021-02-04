import React from 'react'
import  {Slider}  from '../components/slider'
import  {CourseCard}  from '../components/coursecard'
import {Row, Col, Container} from 'react-bootstrap';

export const About = () => {

    return (
      <Container>
        <Row>
          <Col sm="12" className="title">
            <h1>About us</h1>
          </Col>
        </Row>
      </Container>
    )
}