import React from 'react'
import { useSelector } from 'react-redux';

const Posts = () => {
    const posts = useSelector(state => state.postReducer.posts);
    console.log('these are the posts', posts);
    return posts.map(post => <div key={post}>
                                <img src={URL.createObjectURL(post.postImage)} width={200} height={200} alt='none'/>
                                <p>{post.postDescription}</p>
                            </div>)
}

export default Posts
