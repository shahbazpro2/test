import * as types from './types'

const createPost = (values, posts) => {
    return (dispatch) => {
        dispatch({ type: types.CREATE_POST });
        const newPosts = posts.push({ id: posts.length + 1, ...values })
        dispatch({ type: types.CREATE_POST_SUCCESS })
        dispatch({ type: types.GET_ALL_POSTS_SUCCESS, posts: newPosts })
    };
};

export default createPost