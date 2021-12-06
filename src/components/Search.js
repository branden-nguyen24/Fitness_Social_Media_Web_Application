
import React, { Component } from 'react';
import "./search.css"
import { useNavigate } from "react-router-dom";
import { Card, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import foo2 from '../../src/pro2.png';
import foo3 from '../../src/pro3.png';
import foo4 from '../../src/pro4.png';



const Search = () => {
    const navigate = useNavigate();
    const handleClick = (route) => {
      switch (route) {
        case "testimonials":
          navigate("/testimonials");
          return;
        case "login":
          navigate("/login");
          return;
        case "search":
          navigate("/search");
          return; 
        case "register":
          navigate("/register");
          return;
        default:
          return;
      }
    };
  
    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-light bgg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                        <a class="nav-link homepage" href="/"><span class="sr-only"></span></a>
                        </li>
                    </ul>   
                </div>

                <div>
                    <ul>
                     <a><button type="button" class="btn btn-primary button-space" onClick={() => handleClick("login")}>Login</button></a>
                     <button type="button" class="btn btn-primary button-space" onClick={() => handleClick("register")}>Register</button>
                     <button type="button" class="btn btn-primary button-space" onClick={() => handleClick("testimonials")}>Testimonials</button>
                    </ul>
                </div>
      </nav>
      <div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
            <div className="container">
              <div class="thumbnail">
                    <div className="row justify-content-center">
                      <div className="col-12 col-md-10 col-lg-8 col-sm-4 search-bar">
                         <form className="card card-sm" >
                            <div className="cardbody row no-gutters align-items-center">        
                              <div className="col">
                                 <input className="form-control form-control-lg "
                                    type="search" placeholder="What are you waiting for?" ></input>
                              </div>
                             <div className="col-auto"> 
                               <button className="btn btn-lg btn-primary" type="button"onClick={() => handleClick("search")}>Search</button> 
                              </div>
                            </div>
                         </form>
                      </div> 
                   </div>
               </div>
                   <br/>
             </div>
      </div>
      <div class="child">  </div>
      <h4 className="" align = "center"> Search Results </h4> 
      <div class="childhome">  </div>

      <br/>
        <div class="card mb-3" style={{"max-width": "300px;"}}>
            <div class="row no-gutters">
                <div class="col-md-4">
                    <a href="" class="btn btn-fix text-left">
                    <img  src ={foo4} class="card-img" alt="Broken"/></a>
                </div>

                <div class="col-md-8">
                    <div class="card-body">
                            <a href="" class="btn btn-fix text-left"> 
                            <h4 className="card-title"> Ned Stark  <span className="labelfloat">4.5 stars</span> </h4>
                            <p className="card-text">SFSU Campus</p>
                            <p className="card-text"> “All progress takes place outside the comfort zone.”</p>
                            <Button variant="primary">Profile</Button></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mb-3" style={{"max-width": "300px;"}}>
            <div class="row no-gutters">
                <div class="col-md-4">
                    <a href="" class="btn btn-fix text-left">
                    <img  src ={foo2} class="card-img" alt="Broken"/></a>
                </div>

                <div class="col-md-8">
                    <div class="card-body">
                            <a href="" class="btn btn-fix text-left"> 
                            <h4 className="card-title"> Roose Bolton <span className="labelfloat">4.5 stars</span> </h4>
                            <p className="card-text">San Francisco</p>
                            <p className="card-text">“The pain you feel today, will be the strength you feel tomorrow.”</p>
                            <Button variant="primary">Profile</Button></a> 
                    </div>
                </div>
            </div>
        </div>

        <div class="card mb-3" style={{"max-width": "300px;"}}>
            <div class="row no-gutters">
                <div class="col-md-4">
                    <a href="" class="btn btn-fix text-left">
                    <img  src ={foo3} class="card-img" alt="Broken"/></a>
                </div>

                <div class="col-md-8">
                    <div class="card-body">
                            <a href="" class="btn btn-fix text-left"> 
                            <h4 className="card-title"> Bran Stark  <span className="labelfloat">4.5 stars</span> </h4>
                            <p className="card-text"> San Jose</p>
                            <p className="card-text">“A little progress each day adds up to big results”</p>
                            <Button variant="primary">Profile</Button></a>
                    </div>
                </div>
            </div>
        </div>


            
      
        </div>
    )
}

export default Search