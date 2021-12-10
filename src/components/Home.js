import React, { useState } from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import homeImage from '../home1.jpg';
import homeImage2 from '../home2.jpg';
import homeImage3 from '../home.png'
import { Footer } from './index'


const Home = () => {
  
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
      <div className="home-container input-box">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={homeImage}
              alt="First slide"
            />
            <Carousel.Caption className="carousel-caption">
              <h3 className="carousel-label">Meet your workout buddy</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={homeImage2}
              alt="Second slide"
            />

            <Carousel.Caption className="carousel-caption">
              <h3 className="carousel-label">Break a sweat </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={homeImage3}
              alt="Third slide"
            />

            <Carousel.Caption className="carousel-caption">
              <h3 className="carousel-label">Get your fitness on</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      
  );
};

export default Home;






