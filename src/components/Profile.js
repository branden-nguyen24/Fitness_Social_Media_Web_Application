import React from 'react';
import { CustomPlaceholder } from 'react-placeholder-image';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/userActions';
import { Card, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Posts } from './';
import './Profile.css';
import home from '../../src/home.png';

const Profile = () => {
    const dispatch = useDispatch();
    const image = useSelector(state => state.userReducer.profileImage);
    const nickname = useSelector(state => state.userReducer.nickname);
    const description = useSelector(state => state.userReducer.aboutMe);
    const activities = useSelector(state => state.userReducer.activities);
    
    console.log('This is the image ', image);
    const navigate = useNavigate();
    const handleClick = (route) => {
        switch(route){
            case 'calendar':
                navigate('/calendar');
                return;
            case 'workouts':
                navigate('/workouts');
                return;
            case 'photos':
                navigate('/photos');
                return;
            case 'friendposts':
                navigate('/friendposts');
                return;
            case 'logout':
                dispatch(logoutUser());
                navigate('/')
                return;
            case 'createpost':
                navigate('/createpost');
                return;
            default: return;
        }
    }
    
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
                     <a><button type="button" class="btn btn-primary button-space" onClick={() => handleClick('logout')}>Logout</button></a>
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
                               <button className="btn btn-lg btn-primary" type="button">Search</button> 
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
      <h4 className="" align = "center">Hello {nickname} Express Yourself! </h4> 
      <div class="childhome">  </div>



      <div class="card mb-3" >
        <img class="card-img-top" src={URL.createObjectURL(image)} width={200} height={200} alt="Card image cap"/>
        <div class="card-body">
        <h5 class="card-title">{nickname}</h5>
        <p class="card-text">{description}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

 
            <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
            <label class="form-check-label" for="flexRadioDefault2"> <h5>Activities</h5> 
            {activities.map(activity => <h6>{activity}</h6>)}
            </label>
            </div>




        {/* <h5>Activities</h5> {activities.map(activity => <h6>{activity}</h6>)} */}
        
            <div class="list-group">
                <button class="list-group-item list-group-item-success" onClick={() => handleClick('calendar')}>Calendar</button>
                <button class="list-group-item list-group-item-primary" onClick={() => handleClick('workouts')}>Workouts</button>
                <button class="list-group-item list-group-item-warning" onClick={() => handleClick('photos')}>Photos</button>
                <button class="list-group-item list-group-item-info" onClick={() => handleClick('friendposts')}>Friend Posts</button>
            </div>

            <Posts/>
            <br/><button class="btn btn-primary"  onClick={() => handleClick('createpost')}>Create Post</button>
            
            
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

      {/* <div className= "profile-all">
        <div className="profile-container">
           
            <div className="profile-info-container">
                <br/><img src={URL.createObjectURL(image)} width={200} height={200} alt="NO IMG"/> 
                <h3>{nickname}</h3>
                <h5>{description}</h5>
                <h5>Activities</h5>
                {activities.map(activity => <h6>{activity}</h6>)}
            </div>
            <div>
                <button onClick={() => handleClick('calendar')}>Calendar</button>
                <button onClick={() => handleClick('workouts')}>Workouts</button>
                <button onClick={() => handleClick('photos')}>Photos</button>
                <button onClick={() => handleClick('friendposts')}>Friend Posts</button>
            </div>
            
            <Posts/>
            <br/><button onClick={() => handleClick('createpost')}>Create Post</button>
            
        </div>
      </div> */}
      </div>
  );
};

export default Profile;
