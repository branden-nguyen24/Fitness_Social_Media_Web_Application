import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/createprofile');
    }
    return (
        <div className="register-container">
            <form className="register-form" onSubmit={() => handleSubmit()}>
                <div className="register-item">
                    <label>First Name</label>
                    <input/>
                </div>
                <div className="register-item">
                    <label>Last Name</label>
                    <input/>
                </div>
                <div className="register-item">
                    <label>Email</label>
                    <input/>
                </div>
                <div className="register-item">
                    <label>Password</label>
                    <input/>
                </div>
                <button type="submit">join</button>
            </form>
            <Link to='/login'>already have an account?</Link>
        </div>
    )
}

export default Register
