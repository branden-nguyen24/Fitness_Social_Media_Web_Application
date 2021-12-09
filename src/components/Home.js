import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import home from '../../src/home.png';
import home2 from '../../src/pro6.png';
import home3 from '../../src/home3.png';
import './Home.css'
import './Search'





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
        case "search":
          navigate("/search");
          return; 
      case "register":
        navigate("register");
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
                               <button className="btn btn-lg btn-primary" type="button" onClick={() => handleClick("search")}>Search</button> 
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
      <h4 className="" align = "center">Time to Exercise! Popular Places Near SFSU</h4> 
      <div class="childhome">  </div>


      <div className="card-group">
        <div>
            <Card className="text-center" style={{ width: '26rem', alignItems: 'center'}}>
            <br/>
            <Card.Img variant="top" src={home} height={200} width = {250} />
                <Card.Body>
                    <Card.Title> Power Zone </Card.Title>
                        <Card.Text>
                            Free membership for 3 months. 10-15 Mins to SFSU! 
                        </Card.Text>
                    <Button className="btn btn-primary">Visit Power Zone</Button>
                </Card.Body>
             </Card> 
        </div>     
        <div>
            <Card className="text-center" style={{ width: '26rem', alignItems: 'center'}}>
            <br/>
            <Card.Img variant="top" src={home2} height={200} width = {250} />
                <Card.Body>
                    <Card.Title> The Muscle Bar </Card.Title>
                        <Card.Text>
                            See popular healthy meals among your friends!
                        </Card.Text>
                    <Button className="btn btn-primary">Visit Muscle Bar</Button>
                </Card.Body>
             </Card> 
        </div>     
        <div>
            <Card className="text-center" style={{ width: '26rem', alignItems: 'center'}}>
            <br/>
            <Card.Img variant="top" src={home3} height={200} width = {250} />
                <Card.Body>
                    <Card.Title> Pump It Up </Card.Title>
                        <Card.Text>
                            It's time! Join now! 
                        </Card.Text>
                    <Button className="btn btn-primary">Visit Pump It Up</Button>
                </Card.Body>
             </Card> 
        </div>     
      </div> 
            <footer className="my-5 pt-5 text-center text-small">
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="#">About</a></li>
                    <li className="list-inline-item"><a href="#">Services</a></li>
                    <li className="list-inline-item"><a href="#">Contact</a></li>
                    <li className="list-inline-item"><a href="#">Partner</a></li>

                </ul>
            </footer>       
</div>      
           




    
        


  );
};

export default Home;
