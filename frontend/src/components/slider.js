import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import im from "../images/12.png";
import im1 from "../images/13.jpg";
import arrow from "../images/Стрелка влево.svg";
import "../сss/slider.css";

export const Slider = () => {
  const [index, setIndex] = useState(0);
  const [nextIcon, setNextIcon] = useState(
    <img src={arrow} className="next-arrow" alt="next arrow" />
  );
  const [prevIcon, setPrevIcon] = useState(
    <img src={arrow} className="prev-arrow" alt="prev arrow" />
  );

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="slider-head">
      <Carousel
        nextIcon={nextIcon}
        prevIcon={prevIcon}
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img className="carousel-img" src={im} alt="First slide" />
          <Carousel.Caption className="p-slider"></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={im1} alt="Second slide" />
          <Carousel.Caption className="p-slider"></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
