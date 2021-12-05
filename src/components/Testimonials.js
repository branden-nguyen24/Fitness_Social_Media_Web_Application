import React from "react";
import { CustomPlaceholder } from "react-placeholder-image";
import { useNavigate } from "react-router";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from "../testimonial1.jpeg";
import image2 from "../testimonials2.jpg";
import image3 from "../testimonials3.jpeg";

const Testimonials = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    switch (route) {
      case "register":
        navigate("/register");
        return;
      case "login":
        navigate("/login");
        return;
      default:
        return;
    }
  };

  return (
    <div className="testimonials-container">
       <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
       >
        <div>
          <img src={image1}/>
          <div className="myCarousel">
            <h3>Shirley</h3>
            <h4>San Francisco</h4>
            <p>
              Since joining ToughLove I've been more active and healthy. I've also met some 
              amazing people that I workout with frequently. It's a win win!
            </p>
          </div>
        </div>

        <div>
          <img src={image2} />
          <div className="myCarousel">
            <h3>Daniel</h3>
            <h4>Palo Alto</h4>
            <p>
              I've always struggle to maintain a consistent workout schedule, but that's all changed
              thanks to ToughLove. Now I have people who constently motivate me to workout!
            </p>
          </div>
        </div>

        <div>
          <img src={image3} />
          <div className="myCarousel">
            <h3>Vanessa</h3>
            <h4>Oakland</h4>
            <p>
              ToughLove is perfect for a busy young professional like myself. I kill two birds with one stone;
              meeting people and working out!
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
