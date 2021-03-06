import * as types from './types'

const createPost = (values, posts) => {
    return (dispatch) => {
        dispatch({ type: types.GET_ALL_POSTS });
        let newPosts=posts
        newPosts.push({ id: posts.length + 1, ...values })
        setTimeout(()=>{
            dispatch({ type: types.GET_ALL_POSTS_SUCCESS, posts: newPosts })
        },5000)
        
    };
};

export default createPost