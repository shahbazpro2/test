import * as types from './types'

const removeSinglePost = () => {
    return (dispatch) => {
        dispatch({ type: types.REMOVE_SINGLE_POST})
    };
};

export default removeSinglePost