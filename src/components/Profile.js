import React from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/userActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Posts } from './';
import home from '../../src/home.png';



const Profile = () => {
    const dispatch = useDispatch();
    const image = useSelector(state => state.userReducer.profileImage);
    const nickname = useSelector(state => state.userReducer.nickname);
    const description = useSelector(state => state.userReducer.aboutMe);
    const activities = useSelector(state => state.userReducer.activities);
    console.log('here are the activities', activities)
    
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
                <img className="card-img-top" src={home} width={200} height={200} alt="Card image cap"/>
                <div className="card-body">
                    <h3 className="card-title">{nickname}</h3>
                    <p className="card-text">{description}</p>
                    
                    <label className="form-check-label" for="flexRadioDefault2"> <h5>Activities</h5> </label><br/>
                    {activities.map(activity => <span className="activities-span">{activity}</span>)}
                </div>
                <div className="btn-group">
                    <button className="list-group-item list-group-item-success" onClick={() => handleClick('calendar')}>Calendar</button>
                    <button className="list-group-item list-group-item-primary" onClick={() => handleClick('workouts')}>Workouts</button>
                    <button className="list-group-item list-group-item-warning" onClick={() => handleClick('photos')}>Photos</button>
                    <button className="list-group-item list-group-item-info" onClick={() => handleClick('friendposts')}>Friend Posts</button>
                </div>
            </div>
            <div align={"center"} className="createpost-container">
                <Posts/>
                <button className="btn btn-primary" onClick={() => handleClick('createpost')}>Create Post</button>
            </div>
        </div>
      </div>
  );
};

export default Profile;

