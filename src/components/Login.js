import React from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/profile');
    };
    return (
         <div className="login-container input-box">
            <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
                <h3>Login</h3>
                <div>
                    <label>Email:</label>
                    <input/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password"/>
                </div>
                <button type="submit">Login</button>
                
            </form>
        </div> 

    )
}

export default Login



        