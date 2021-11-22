import React from "react";
import logo from "../logo.png";
import { useNavigate } from "react-router";

const Logo = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <div>
        <div className="logo-container" onClick={() => handleClick()}>
          <img className="logo-image" src={logo} alt="img not working" />
          <span className="logo-text">ToughLove</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
