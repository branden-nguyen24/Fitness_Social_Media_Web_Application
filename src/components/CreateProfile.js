import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { setNickname, setAboutMe, setActivities, setProfileImage } from '../redux/actions/userActions';


const CreateProfile = () => {
    useSelector(state => console.log('inside here', state))//just for test
    const nickname = useSelector(state => state.userReducer.nickname)
    const aboutMe = useSelector(state => state.userReducer.aboutme)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/profile');
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
            <div>
                <label>Tell Us About Yourself</label>
                <textarea placeholder="Input something" onChange={e => dispatch(setAboutMe(e.target.value))}>{aboutMe}</textarea>
            </div>
            <div>
                <label>Pick your favorite activities</label>
                <form className="checkbox-form">
                    <input type="checkbox" onClick={() => dispatch(setActivities('weight training'))}/>
                    <label>Weight Training</label><br/>
                    <input type="checkbox" onClick={() => dispatch(setActivities('running'))}/>
                    <label> Running</label><br/>
                    <input type="checkbox" onClick={() => dispatch(setActivities('swimming'))}/>
                    <label> Swimming</label><br/>
                    <input type="checkbox" onClick={() => dispatch(setActivities('yoga'))}/>
                    <label> Yoga</label><br/>
                    <input type="checkbox" onClick={() => dispatch(setActivities('sports'))}/>
                    <label> Sports</label><br/>
                    <input type="checkbox" onClick={() => dispatch(setActivities('bicycling'))}/>
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
            <button onClick={() => handleClick()}>Make profile</button>
        </div>
    )
}

export default CreateProfile
