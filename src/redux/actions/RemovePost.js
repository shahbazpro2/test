import * as types from './types'

const removePost = (id, posts) => {
    return (dispatch) => {
        const filter = posts.filter(p => p.id !== id)
        dispatch({ type: types.GET_ALL_POSTS_SUCCESS, posts:filter })
    };
};

export default removePost