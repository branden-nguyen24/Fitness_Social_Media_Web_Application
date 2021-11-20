import React from 'react';
import { useNavigate } from 'react-router-dom'

const CreateProfile = () => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        console.log('inside handleClick')
        navigate('/profile');
    }
    return (
        <div className="createprofile-container">
            <div>
                <label>Your Display Nickname</label><br/>
                <input/>
            </div>
            <div>
                <label>Tell Us About Yourself</label><br/>
                <textarea>test test </textarea>
            </div>
            <div>
                <label>Pick your favorite activities</label>
                <form>
                    <input type="checkbox"/>
                    <label>Weight Training</label><br/>
                    <input type="checkbox"/>
                    <label> Running</label><br/>
                    <input type="checkbox"/>
                    <label> Swimming</label><br/>
                    <input type="checkbox"/>
                    <label> Yoga</label><br/>
                    <input type="checkbox"/>
                    <label> Sports</label><br/>
                    <input type="checkbox"/>
                    <label> Bicycling</label><br/>
                </form>
            </div>
            <div>
                <label>upload photo</label><br/>
                <input type="file"/>
            </div>
            <button onClick={() => handleClick()}>make profile</button>
        </div>
    )
}

export default CreateProfile
