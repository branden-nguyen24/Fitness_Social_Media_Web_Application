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

      <div className="profile-container">
        <div class="card mb-3" >
            <div className="profile-details" align={"center"}>
                <img class="card-img-top" src={home} width={200} height={200} alt="Card image cap"/>
                <div class="card-body">
                <h3 class="card-title">{nickname}</h3>
                <p class="card-text">{description}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>


            
            <label class="form-check-label" for="flexRadioDefault2"> <h5>Activities</h5> </label>
            {activities.map(activity => <h6>{activity}</h6>)}
            
            
        
            <div class="list-group">
                <button class="list-group-item list-group-item-success" onClick={() => handleClick('calendar')}>Calendar</button>
                <button class="list-group-item list-group-item-primary" onClick={() => handleClick('workouts')}>Workouts</button>
                <button class="list-group-item list-group-item-warning" onClick={() => handleClick('photos')}>Photos</button>
                <button class="list-group-item list-group-item-info" onClick={() => handleClick('friendposts')}>Friend Posts</button>
            </div>

            <Posts/>
            <br/>
            <button class="btn btn-primary"  onClick={() => handleClick('createpost')}>Create Post</button>
            
            
            </div>
        </div>
      </div>
  );
};

export default Profile;


{/* <footer className="my-5 pt-5 text-center text-small">
    <ul className="list-inline">
        <li className="list-inline-item"><a href="#">About</a></li>
        <li className="list-inline-item"><a href="#">Services</a></li>
        <li className="list-inline-item"><a href="#">Contact</a></li>
        <li className="list-inline-item"><a href="#">Partner</a></li>
    </ul>
</footer>  */}
