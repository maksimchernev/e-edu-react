import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FlippingCard,
  FlippingCardBack,
  FlippingCardFront,
} from "react-ui-cards";
import likeIcon from "../images/coursecard/Like.svg";
import "../сss/coursecard.css";

export const CourseCard = ({ cardInfo }) => {
  const addClass = (e) => {
    e.target.classList.toggle("selected");
  };

  return (
    <div className="coursecard-grid d-flex flex-wrap align-content-between justify-content-between">
      {cardInfo.map((card, index) => {
        if (index < 6) {
          return (
            <div className="coursecard-unit mb-5" key={card._id}>
              <FlippingCard>
                <FlippingCardBack>
                  <h3>Course title:</h3>
                  <h6>{card.title}</h6>
                  <h4>Course duration:</h4>
                  <h6>{card.duration}</h6>
                  <h3>Course price:</h3> <h6>{card.price}</h6>
                  <button className="like-btn" onClick={addClass}></button>
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
