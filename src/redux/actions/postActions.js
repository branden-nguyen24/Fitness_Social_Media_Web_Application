export const setPostImage = (postImage) => ({
    type: 'SET_POST_IMAGE',
    payload: postImage
})

export const setPostDescription = (postDescription) => ({
    type: 'SET_POST_DESCRIPTION',
    payload: postDescription
})

export const insertPost = (getState) => {
    { postReducer } = getState();
    

}
