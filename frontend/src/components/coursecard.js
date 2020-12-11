import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardDeck, Row} from 'react-bootstrap';
import{FlippingCard, FlippingCardBack, FlippingCardFront} from 'react-ui-cards';
export const CourseCard =( { cardInfo }) => {
      return(
        <div>
          <CardDeck>
            <Row>
					 <FlippingCard className="card" style={{border: "2px solid #003399"}}>
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