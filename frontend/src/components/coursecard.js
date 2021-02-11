import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FlippingCard,
  FlippingCardBack,
  FlippingCardFront,
} from "react-ui-cards";
import "../сss/coursecard.css";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useHttp } from "../hooks/http.hooks";

export const CourseCard = ({ cardInfo, user }) => {
  
  const auth = useContext(AuthContext)
  const {request,loading} = useHttp()
  
  const addClass = (e) => {

    console.log(e.target.getAttribute('data-key'))

    const data = e.target.getAttribute('data-key')

    if (user)
    {
      updateFavorites(data)
    }

    e.target.classList.toggle("selected");
  };

const updateFavorites = (card_id) => {

  if (user.favorites.indexOf(card_id) !== -1)
  {

    const index = user.favorites.indexOf(card_id)

   user.favorites.splice(index,1)
   updateHandler()
  }
  else{
  user.favorites.push(card_id)
   updateHandler()
  }
}

const updateHandler = async() =>{
  try{
      
      await request(`api/user/updateCourses/${auth.userId}`, 'POST', user,{Authorization: `Bearer ${auth.token}`})
  } catch(e) {

  }
}

  return (
    <div className="coursecard-grid d-flex flex-wrap align-content-between justify-content-between">
      {cardInfo.map((card, index) => {

        if (index < 6) {
        ///if (index < props.number) {
          return (
            <div className="coursecard-unit mb-5" key={card._id}>
              <FlippingCard>
                <FlippingCardBack>
                  <h3>Course title:</h3>
                  <h6>{card.title}</h6>
                  <h4>Course duration:</h4>
                  <h6>{card.duration}</h6>
                  <h3>Course price:</h3> <h6>{card.price}</h6>
                  <button className={(user && user.favorites.indexOf(card._id) !== -1 ? "like-btn selected" : "like-btn")} data-key={card._id} onClick={addClass}></button>
                </FlippingCardBack>
                <FlippingCardFront>
                  <h3>Course Name:</h3>
                  <h6>{card.title}</h6>
                </FlippingCardFront>
              </FlippingCard>
            </div>
          );
        }
      })}
    </div>
  );
};
