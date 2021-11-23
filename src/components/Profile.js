import React from 'react';
import { CustomPlaceholder } from 'react-placeholder-image';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/userActions';

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
            <nav> 
                <input placeholder="search"/>
                <button onClick={() => handleClick('logout')}>logout</button>
            </nav>
            <div className="profile-info-container">
                <img src={URL.createObjectURL(image)} width={200} height={200}/>
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
            <div>
                <CustomPlaceholder width={700} height={400}/><br/>
                <CustomPlaceholder width={700} height={400}/><br/>
                <CustomPlaceholder width={700} height={400}/>
            </div>
            <button onClick={() => handleClick('createpost')}>create post</button>
            
        </div>
    )
}

export default Profile