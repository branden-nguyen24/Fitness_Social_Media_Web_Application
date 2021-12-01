import React from "react";
import { CustomPlaceholder } from "react-placeholder-image";
import { useNavigate } from "react-router";
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
      <div className="layout">
        <div>
          <h1> Testimonials </h1>
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
          <button className="reg-button" onClick={() => handleClick("register")}>Register</button>
          <button className="login-button" onClick={() => handleClick("login")}>Login</button>
        </nav>
      </div>
    </div>
  );
};

export default Testimonials;
