import * as types from '../actions/types'
const initialAllPostState = {
    post: {},
    loading: false,
    error: null
}

const getSinglePostReducer = (state = initialAllPostState, action) => {
    switch (action.type) {
        case types.GET_SINGLE_POST:
            return {
                ...state,
                loading: true
            }
        case types.GET_SINGLE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                post: action.post
            }
        case types.GET_SINGLE_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.err
            }
        default:
            return state
    }
}

export default getSinglePostReducer
