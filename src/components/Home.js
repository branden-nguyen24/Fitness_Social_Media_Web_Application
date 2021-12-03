import React from "react";
import { CustomPlaceholder } from "react-placeholder-image";
import { useNavigate } from "react-router-dom";
import home from '../../src/home.png';
import home2 from '../../src/home2.png';
import pro1 from '../../src/pro1.png';
import pro2 from '../../src/pro2.png';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = (route) => {
    switch (route) {
      case "testimonials":
        navigate("/testimonials");
        return;
      case "login":
        navigate("/login");
        return;
      case "register":
        navigate("register");
        return;
      default:
        return;
    }
  };

  return (
    <div className="home-container">
      <div className="layout">
        <div>
            <h1>Welcome!</h1>
            <div>
            <img src={home}  width={700}  height={400} /> 
            <br />
            <img src={home2}  width={700}  height={400} /> 
            <br />
            <img src={pro1}  width={700}  height={400} /> 
            <br />
            <img src={pro2}  width={700}  height={400} /> 
            <br />
          </div>
        </div>
        <nav>
          <button onClick={() => handleClick("testimonials")}>
            Testimonials
          </button>
          <button className="login-button" onClick={() => handleClick("login")}>
            Log In
          </button>
          <button
            className="reg-button"
            onClick={() => handleClick("register")}
          >
            Register
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Home;
