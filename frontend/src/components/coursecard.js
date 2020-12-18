import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import{FlippingCard, FlippingCardBack, FlippingCardFront} from 'react-ui-cards';
export const CourseCard =( { cardInfo }) => {

  var rowCount =0;
  var maxRowCount = 3;

  return(

  <tbody>
        { cardInfo.map( (card) =>{

      return(
        <tr key = {card._id}>
  
					<FlippingCard className="card" style={{border: "2px solid #003399"}}>
                        <FlippingCardBack>
                       <h3>Course field:</h3> <td>{card.field}</td>
                       <h4>Course difficulty:</h4><td>{card.difficulty}</td>
                        </FlippingCardBack>

                        <FlippingCardFront>
                        <h3>Course Name:</h3>
                        <td>{card.name}</td>
                        </FlippingCardFront>
            </FlippingCard>     
        
        
        </tr>
      )
        })
        }
      </tbody>
  )
}