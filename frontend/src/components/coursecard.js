import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, CardDeck, Carousel, Modal, Form, Row, Col} from 'react-bootstrap';

export const CourseCard =() => {
      return(
        <div>
          <CardDeck>
          <Row>
					  <Card style={{border: "2px solid #003399", width: "422.94px", height: "482.15px"}}>
					    <Card.Img variant="top" src="holder.js/100px160" />
					    <Card.Body>
					      <Card.Title>Card title</Card.Title>
					      <Card.Text>
					        This is a wider card with supporting text below as a natural lead-in to
					        additional content. This content is a little bit longer.
					      </Card.Text>
					    </Card.Body>
					  </Card>
					  <Card style={{border: "2px solid #003399"}}>
					    <Card.Img variant="top" src="holder.js/100px160" />
					    <Card.Body>
					      <Card.Title>Card title</Card.Title>
					      <Card.Text>
					        This card has supporting text below as a natural lead-in to additional
					        content.{' '}
					      </Card.Text>
					    </Card.Body>
					  </Card>
					  <Card style={{border: "2px solid #003399"}}>
					    <Card.Img variant="top" src="holder.js/100px160" />
					    <Card.Body>
					      <Card.Title>Card title</Card.Title>
					      <Card.Text>
					        This is a wider card with supporting text below as a natural lead-in to
					        additional content. This card has even longer content than the first to
					        show that equal height action.
					      </Card.Text>
					    </Card.Body>
					  </Card>
		  </Row>
		  <Row>
					  <Card style={{border: "2px solid #003399", width: "422.94px", height: "482.15px"}}>
					    <Card.Img variant="top" src="holder.js/100px160" />
					    <Card.Body>
					      <Card.Title>Card title</Card.Title>
					      <Card.Text>
					        This is a wider card with supporting text below as a natural lead-in to
					        additional content. This card has even longer content than the first to
					        show that equal height action.
					      </Card.Text>
					    </Card.Body>
					  </Card>
					  <Card style={{border: "2px solid #003399"}}>
					    <Card.Img variant="top" src="holder.js/100px160" />
					    <Card.Body>
					      <Card.Title>Card title</Card.Title>
					      <Card.Text>
					        This is a wider card with supporting text below as a natural lead-in to
					        additional content. This card has even longer content than the first to
					        show that equal height action.
					      </Card.Text>
					    </Card.Body>
					  </Card>
					  <Card style={{border: "2px solid #003399"}}>
					    <Card.Img variant="top" src="holder.js/100px160" />
					    <Card.Body>
					      <Card.Title>Card title</Card.Title>
					      <Card.Text>
					        This is a wider card with supporting text below as a natural lead-in to
					        additional content. This card has even longer content than the first to
					        show that equal height action.
					      </Card.Text>
					    </Card.Body>
					  </Card>
          </Row>
					</CardDeck>
        </div>
      );
    } 