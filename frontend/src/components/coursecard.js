import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import "../сss/coursecard.css";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useHttp } from "../hooks/http.hooks";

export const CourseCard = ({ cardInfo, user, count }) => {
  
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

        if (index < count) {
          return (
            <div className="coursecard-unit mb-5" key={card._id}>
              <Flippy flipOnHover={true} style={{ width: '411px', height: '482.15px' }} >
                <FrontSide>
                  <h3 id='cardPrice'>{card.price}</h3>
                  <h6 id='frontTitle'>{card.title}</h6>
                  <h6 id = 'cardDesc'>{card.duration}</h6>
                </FrontSide>
                <BackSide>
                  <h3 id = 'backTitle'>Что дает данный курс:</h3>
                  <h6>{card.title}</h6>
                  <h4>Course duration:</h4>
                  <h6>{card.duration}</h6>
                  <h3>Course price:</h3> <h6>{card.price}</h6>

                   <div className="btn-group btn-group-justified" id="btns" role="group" aria-label="Justified button group">
                       <button  className={(user && user.favorites.indexOf(card._id) !== -1 ? "like-btn selected" : "like-btn")} data-key={card._id} onClick={addClass}></button>
                        <button  className="learn-more-btn float-right" onClick={()=> window.open(card.url, "_blank")}>Узнать больше</button>
                   </div>

                </BackSide>
              </Flippy>
            </div>
          );
        }
      })}
    </div>
  );
};