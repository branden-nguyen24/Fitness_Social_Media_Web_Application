import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/profile');
    };
    return (
        <div className="login">
            <form className="login-form" onSubmit={() => handleSubmit()}>
                <div>
                    <label>enter email</label>
                    <input/>
                </div>
                <div>
                    <label>enter password</label>
                    <input/>
                </div>
                <button type="submit">login</button>
                
            </form>
        </div>
    )
}

export default Login
