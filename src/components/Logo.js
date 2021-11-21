import React from 'react';
import logo from '../logo.png'
import { useNavigate } from 'react-router';

const Logo = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }
    return (
        <div className="logo-container" onClick={() => handleClick()} >
            <img className="logo-image" src={logo} alt='img not working' />
            <h2 className="logo-text">Tough Love</h2>
        </div>
    )
}

export default Logo
