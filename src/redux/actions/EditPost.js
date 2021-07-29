import * as types from './types'

const editPost = (values, posts) => {
    return (dispatch) => {
        dispatch({ type: types.GET_ALL_POSTS });
        let newPosts = posts.map(p => {
            if (p.id === values.id) {
                delete p['title']
                delete p['body']
                return { ...p, ...values }
            } else return p
        })
        console.log(newPosts)
        setTimeout(() => {
            dispatch({ type: types.GET_ALL_POSTS_SUCCESS, posts: newPosts })
        }, 5000)

    };
};

export default editPost