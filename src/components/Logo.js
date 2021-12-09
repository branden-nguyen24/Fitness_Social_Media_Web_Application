import React from "react";
import logo from "../logo.png";
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Form, FormControl, Button } from 'react-bootstrap'
//import { logoutUser } from "../redux/actions/userActions";

const Logo = () => {
  const isLoggedIn = useSelector(state => state.userReducer.isLoggedIn);
  //const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleClick = () => {
    (isLoggedIn ? navigate('/profile') : navigate("/"));
  };
  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
   <div className="navbar-container">

      <div className="navbar-logo" onClick={handleClick}>
        <img className="logo-image" src={logo} alt="img not working" />
        <h1 className="logo-text">ToughLove</h1>
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
      
      {isLoggedIn ? 
                  <Link 
                  to="/" 
                  id="nav-button" 
                  className="btn btn-primary"
                  style={{margin:10}}
                  onClick={(e) => handleLogout(e)}
                >Logout</Link>
                  :
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
      }
      
   </div>
  );
};

export default Logo;
