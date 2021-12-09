import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPostImage, setPostDescription, insertPost } from '../redux/actions/postActions';


const CreatePost = () => {
    const { postDescription, postImage }  = useSelector(state => state.postReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const newPost = { 
            postImage,
            postDescription
        }
        dispatch(insertPost(newPost));
        navigate('/profile');
    }
    useSelector(state => console.log(state));
    return (
        <form className="createpost-container input-box" onSubmit={handleOnSubmit} >
            <div className="createpost-description">
                <label> What's on your mind? </label>
                <textarea
                    value={postDescription}
                    onChange={e => dispatch(setPostDescription(e.target.value))}
                > </textarea>
            </div>
            <div className="createpost-uploadphoto">
                <label>Upload Photo</label>
                <input 
                    type="file"
                    accept=".png,.jpeg" 
                    onChange={e => dispatch(setPostImage(e.target.files[0]))}
                />
            </div>
            
            <button type="submit">Post</button>
        </form>
    )
}

export default CreatePost
