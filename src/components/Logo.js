import React from "react";
import logo from "../logo.png";
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom'
import { Form, FormControl, Button } from 'react-bootstrap'

const Logo = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
   <div className="navbar-container">

      <div className="navbar-logo" onClick={handleClick}>
        <img className="logo-image" src={logo} alt="img not working" />
        <header className="logo-text">ToughLove</header>
      </div>
      

      <Form className="d-flex" id="navbar-search">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button className="btn btn-primary">Search</Button>
      </Form>
      

      <div clasnname="navbar-buttons">
        <Link 
          to="/register" 
          id="nav-button" 
          className="btn btn-primary"
          style={{margin:10}}
        >Register</Link>
        <Link 
          to="/login" 
          id="nav-button" 
          className="btn btn-primary"
          style={{margin:10}}
        >Login</Link>
        <Link 
          to="/testimonials" 
          id="nav-button" 
          className="btn btn-primary"
          style={{margin:10}}
        >Testimonials</Link>
      </div>
   </div>
  );
};

export default Logo;
