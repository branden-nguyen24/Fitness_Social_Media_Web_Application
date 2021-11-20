import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const handleClick = (route) => {
        switch(route){
            case 'testimonials':    
                navigate('/testimonials');
                return;
            case 'login':
                navigate('/login');
                return;
            case 'register':
                navigate('register');
                return;
            default: return;
        }

    }

    return (
        <div className="home-container">
            <button className="home-bttn" onClick={()=>handleClick('testimonials')}>testimonials</button>
            <button className="home-bttn" onClick={()=>handleClick('login')}>log in</button>
            <button className="home-bttn" onClick={()=>handleClick('register')}>register</button>
        </div>
    )
}

export default Home
