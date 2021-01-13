import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import{FlippingCard, FlippingCardBack, FlippingCardFront} from 'react-ui-cards';
import '../сss/coursecard.css'
export const CourseCard =( { cardInfo }) => {

  var rowCount =0;
  var maxRowCount = 3;

  return(


      <div className = 'coursecard-grid'>
        <div className="row">

          { cardInfo.map( (card) =>{
            return(
              <div className="col">
                <div className="coursecard-unit">
                  <div key = {card._id}>
					                  <FlippingCard >
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
                  </div>
                </div>
              )
          })
        }
        </div>
      </div>
  )
}