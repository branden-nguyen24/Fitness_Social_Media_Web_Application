import React from 'react'
import { CustomPlaceholder } from 'react-placeholder-image'
import { useNavigate } from 'react-router'

const Profile = () => {
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
                navigate('/')
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
           
            <CustomPlaceholder width={200} height={200}/>
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
        </div>
    )
}

export default Profile