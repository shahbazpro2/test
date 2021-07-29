import * as types from './types'

const createPost = (values, posts) => {
    return (dispatch) => {
        dispatch({ type: types.GET_ALL_POSTS });
        posts.push({ id: posts.length + 1, ...values })
        dispatch({ type: types.GET_ALL_POSTS_SUCCESS, posts: posts })
    };
};

export default createPost