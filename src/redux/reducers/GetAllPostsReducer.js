import * as types from '../actions/types'
const initialAllPostsState = {
    posts: {},
    loading: false,
    error: null
}

const getAllPostsReducer = (state = initialAllPostsState, action) => {
    switch (action.type) {
        case types.GET_ALL_POSTS:
            return {
                ...state,
                loading: true
            }
        case types.GET_ALL_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload
            }
        case types.GET_ALL_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default getAllPostsReducer
