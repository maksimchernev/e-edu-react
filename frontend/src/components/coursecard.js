import React, {setState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, CardDeck, Carousel, Modal, Form, Row, Col} from 'react-bootstrap';
import{FlippingCard, FlippingCardBack, FlippingCardFront} from 'react-ui-cards';
export const CourseCard =() => {

      return(
        <div>
          <CardDeck className="carddeck">
          <Row>
					 <FlippingCard className="card" style={{border: "2px solid #003399"}}>
                        <FlippingCardBack>
                              Content that will be displayed on the back of the card
                        </FlippingCardBack>
                        <FlippingCardFront>
                             Content that will be displayed on the front of the card
                        </FlippingCardFront>
                      </FlippingCard>
                      <FlippingCard className="card" style={{border: "2px solid #003399"}}>
                        <FlippingCardBack>
                              Content that will be displayed on the back of the card
                        </FlippingCardBack>
                        <FlippingCardFront>
                             Content that will be displayed on the front of the card
                        </FlippingCardFront>
                      </FlippingCard>
                      <FlippingCard className="card" style={{border: "2px solid #003399"}}>
                        <FlippingCardBack>
                              Content that will be displayed on the back of the card
                        </FlippingCardBack>
                        <FlippingCardFront>
                             Content that will be displayed on the front of the card
                        </FlippingCardFront>
                      </FlippingCard>
		  </Row>
		  <Row>
					  <FlippingCard className="card" style={{border: "2px solid #003399"}}>
                        <FlippingCardBack>
                              Content that will be displayed on the back of the card
                        </FlippingCardBack>
                        <FlippingCardFront>
                             Content that will be displayed on the front of the card
                        </FlippingCardFront>
                      </FlippingCard>
                      <FlippingCard className="card"style={{border: "2px solid #003399"}}>
                        <FlippingCardBack>
                              Content that will be displayed on the back of the card
                        </FlippingCardBack>
                        <FlippingCardFront>
                             Content that will be displayed on the front of the card
                        </FlippingCardFront>
                      </FlippingCard>
                      <FlippingCard  className="card" style={{border: "2px solid #003399"}}>
                        <FlippingCardBack>
                              Content that will be displayed on the back of the card
                        </FlippingCardBack>
                        <FlippingCardFront>
                             Content that will be displayed on the front of the card
                        </FlippingCardFront>
                      </FlippingCard>
          </Row>
					</CardDeck>
        </div>
      );
    } 