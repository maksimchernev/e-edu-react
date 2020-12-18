import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import{FlippingCard, FlippingCardBack, FlippingCardFront} from 'react-ui-cards';
export const CourseCard =( { cardInfo }) => {

  var rowCount =0;
  var maxRowCount = 3;

  return(
      <div>
        { cardInfo.map( (card) =>{

      return(
        <div key = {card._id}>
  
					<FlippingCard className="card" style={{border: "2px solid #003399"}}>
                        <FlippingCardBack>
                       <h3>Course field:</h3><h6>{card.field}</h6>
                       <h4>Course difficulty:</h4><h6>{card.difficulty}</h6>
                        </FlippingCardBack>

                        <FlippingCardFront>
                        <h3>Course Name:</h3>
                        <h6>{card.name}</h6>
                        </FlippingCardFront>
            </FlippingCard>     
        
        
        </div>
      )
        })
        }
      </div>
  )
}