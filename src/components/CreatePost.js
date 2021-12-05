import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPostImage, setPostDescription, insertPost } from '../redux/actions/postActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, FormControl } from 'react-bootstrap';
import './createpost.css';

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
        <div>  
        <div class="child">  </div>
        <h4 className="" align = "center">Describe your day! </h4> 
        <div class="childhome">  </div>   
        <Card  align = "center" >
        <form className="form-group" onSubmit={handleOnSubmit}>
            <div className="createpost-uploadphoto">
                <h5> Upload Photo </h5>
                <input 
                    type="file"
                    accept=".png,.jpeg" 
                    onChange={e => dispatch(setPostImage(e.target.files[0]))}
                />
            </div>
            <div className="createpost-description" >
                <textarea
                    value={postDescription}
                    onChange={e => dispatch(setPostDescription(e.target.value))}
                > </textarea>
            </div>
            <button type="submit"class="btn btn-primary">Post</button>
        </form>
        </Card><br/>
        </div>



        
    )
}

export default CreatePost


    




    // <Card className="text-center"  align = "center" style={{ width: '50rem' }}>
    //             <Card.Body>
    //                 <Card.Title> Upload Photo </Card.Title>
    //                 <input type="file"  align = "center"
    //                        accept=".png,.jpeg" 
    //                        onChange={e => dispatch(setPostImage(e.target.files[0]))} />
    //                     <Card.Text>
    //                     <textarea value={postDescription} placeholder="Add Description" hight = {200} width = {200}
    //                               onChange={e => dispatch(setPostDescription(e.target.value))}> </textarea>
    //                     </Card.Text>
    //                     <button type="submit"class="btn btn-primary">Post</button>
    //             </Card.Body>
    //     </Card><br/>