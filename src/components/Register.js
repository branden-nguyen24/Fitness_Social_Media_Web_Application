import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setFirstName, setLastName, setEmail, setPassword, loginUser,  } from '../redux/actions/userActions';

const Register = () => {
    useSelector(state => console.log(state))//just for test
    const firstName = useSelector(state => state.userReducer.firstName);
    const lastName = useSelector(state => state.userReducer.lastName);
    const email = useSelector(state => state.userReducer.email);
    const password = useSelector(state => state.userReducer.password);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = () => {
        dispatch(loginUser())
        navigate('/createprofile');
    }
    return (
        <div className="register-container">
            <form className="register-form" onSubmit={() => handleSubmit()}>
                <div className="register-item">
                    <label>First Name</label>
                    <input
                        value={firstName}
                        onChange={e => dispatch(setFirstName(e.target.value))}
                    />
                </div>
                <div className="register-item">
                    <label>Last Name</label>
                    <input
                        value={lastName}
                        onChange={e => dispatch(setLastName(e.target.value))}
                    />
                </div>
                <div className="register-item">
                    <label>Email</label>
                    <input
                        type='email'
                        value={email}
                        onChange={e => dispatch(setEmail(e.target.value))}
                    />
                </div>
                <div className="register-item">
                    <label>Password</label>
                    <input
                        type='password'
                        value={password}
                        onChange={e => dispatch(setPassword(e.target.value))}
                    />
                </div>
                <button type="submit">join</button>
            </form>
            <Link to='/login'>already have an account?</Link>
        </div>
    )
}

export default Register
