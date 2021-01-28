import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import{FlippingCard, FlippingCardBack, FlippingCardFront} from 'react-ui-cards';
import '../сss/coursecard.css'
export const CourseCard =( { cardInfo }) => {

  ;

  return(


      <div className = 'coursecard-grid d-flex flex-wrap align-content-between justify-content-between'>
        {/* <div className="d-flex flex-wrap"> */}

          { cardInfo.map( (card,index) =>{

            if (index < 6)
            {

            
           
            return(
              // <div className="col-md-4">
                <div className="coursecard-unit mb-5">
                  <div key = {card._id}>
					                  <FlippingCard>
                              <FlippingCardBack>
                                <h3>Course title:</h3><h6>{card.title}</h6>
                                <h4>Course duration:</h4><h6>{card.duration}</h6>
                                 <h3>Course price:</h3> <h6>{card.price}</h6>
                              </FlippingCardBack>

                              <FlippingCardFront>
                                <h3>Course Name:</h3>
                                <h6>{card.title}</h6>
                              </FlippingCardFront>
                            </FlippingCard>

                    </div>
                  </div>
                // </div>
              )
          }})

        }
        {/* </div> */}
      </div>
  )
}