import * as types from './types'

const editPost = (values, posts) => {
    return (dispatch) => {
        dispatch({ type: types.GET_ALL_POSTS });
        let newPosts = posts.map(post => {
            if (post.id === values.id) {
                delete post['title']
                delete post['body']
                return { ...post, ...values }
            } else return post
        })
        setTimeout(() => {
            dispatch({ type: types.GET_ALL_POSTS_SUCCESS, posts: newPosts })
        }, 5000)

    };
};

export default editPost