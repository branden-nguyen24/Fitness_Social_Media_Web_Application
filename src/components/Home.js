import React from "react";
import { CustomPlaceholder } from "react-placeholder-image";
import { useNavigate } from "react-router-dom";

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
            <h1>Home</h1>
            <div>
            <CustomPlaceholder width={700} height={400} />
            <br />
            <CustomPlaceholder width={700} height={400} />
            <br />
            <CustomPlaceholder width={700} height={400} />
            <br />
            <CustomPlaceholder width={700} height={400} />
            <br />
          </div>
        </div>
        <nav>
          <button onClick={() => handleClick("testimonials")}>
            testimonials
          </button>
          <button className="login-button" onClick={() => handleClick("login")}>
            log in
          </button>
          <button
            className="reg-button"
            onClick={() => handleClick("register")}
          >
            register
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Home;
