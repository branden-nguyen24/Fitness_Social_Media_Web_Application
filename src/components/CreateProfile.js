import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { setNickname, setAboutMe, setActivities, setProfileImage, loginUser } from '../redux/actions/userActions';

const CreateProfile = () => {
    useSelector(state => console.log('inside here', state))//just for test
    const nickname = useSelector(state => state.userReducer.nickname)
    const aboutMe = useSelector(state => state.userReducer.aboutme)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useSelector(state => console.log(state));
    const handleClick = (e) => {
        e.preventDefault();
        navigate('/profile');

    }
    const handleEntry = activity => {
        dispatch(setActivities(activity))
    }
    return (
        <div className="createprofile-container input-box">
            <h2>Create Profile</h2>
            <div>
                <label>Your Display Nickname</label>
                <input
                    value={nickname}
                    placeholder="Enter nickname"
                    onChange={e => dispatch(setNickname(e.target.value))}
                />
            </div>
            <div className="form-group">
                <label>Tell Us About Yourself</label>
                <textarea 
                    className="form-control"
                    rows={10}
                    placeholder="Input something" 
                    onChange={e => dispatch(setAboutMe(e.target.value))}
                >{aboutMe}</textarea>
            </div>
            <div>
                <label>Pick your favorite activities</label>
                <form className="checkbox-form">
                    <input type="checkbox" onClick={() => handleEntry('Weight training')}/>
                    <label>Weight Training</label><br/>
                    <input type="checkbox" onClick={() => handleEntry('Running')}/>
                    <label> Running</label><br/>
                    <input type="checkbox" onClick={() => handleEntry('Swimming')}/>
                    <label> Swimming</label><br/>
                    <input type="checkbox" onClick={() => handleEntry('Yoga')}/>
                    <label> Yoga</label><br/>
                    <input type="checkbox" onClick={() => handleEntry('Sports')}/>
                    <label> Sports</label><br/>
                    <input type="checkbox" onClick={() => handleEntry('Bicycling')}/>
                    <label> Bicycling</label>
                </form>
            </div>
            <div>
                <label>Upload photo</label>
                <input 
                    type="file"
                    accept=".png,.jpeg"
                    onChange={e => dispatch(setProfileImage(e.target.files[0]))}
                    />
            </div>
            <button onClick={(e) => handleClick(e)}>Make profile</button>
        </div>
    )
}

export default CreateProfile
