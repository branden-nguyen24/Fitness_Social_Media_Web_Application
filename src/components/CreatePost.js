import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPostImage, setPostDescription, insertPost } from '../redux/actions/postActions';


const CreatePost = () => {
    const postDescription = useSelector(state => state.postReducer.postDescription);
    const dispatch = useDispatch();
    return (
        <form className="createpost-container" onSubmit={() => dispatch(insertPost())}>
            <div className="createpost-uploadphoto">
                <label>upload photo</label><br/>
                <input 
                    type="file"
                    accept=".png,.jpeg" 
                    onChange={e => dispatch(setPostImage(e.target.files[0]))}
                    />
            </div>
            <div className="createpost-description">
                <textarea
                    value={postDescription}
                    onChange={e => dispatch(setPostDescription(e.target.value))}
                > </textarea>
            </div>
            <button type="submit">post</button>
        </form>
    )
}

export default CreatePost
