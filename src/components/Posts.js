import React from 'react'
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

const Posts = () => {
    const posts = useSelector(state => state.postReducer.posts);
    return posts.map(post => <Card style={{ width: '75%',
                                            display:'block',
                                            margin:'15px'}}>
                                <Card.Img
                                    
                                    variant="top" 
                                    src={URL.createObjectURL(post.postImage)} 
                                    style={{ width: '75%',
                                             height: "100%",
                                            margin:"15px"}}
                                />
                                <Card.Body>
                                
                                <Card.Text>
                                    {post.postDescription}
                                </Card.Text>
                                </Card.Body>
                            </Card>)
}

export default Posts


