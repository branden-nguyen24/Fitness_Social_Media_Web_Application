import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/profile');
    };
    return (
        <div className="login input-box">
            <form className="login-form" onSubmit={() => handleSubmit()}>
                <h3>Login</h3>
                <div>
                    <label>Email:</label>
                    <input placeholder="Please enter email"/>
                </div>
                <div>
                    <label>Password:</label>
                    <input placeholder="Please enter password"/>
                </div>
                <button type="submit">Login</button>
                
            </form>
        </div>
    )
}

export default Login
