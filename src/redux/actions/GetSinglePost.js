import axios from 'axios';
import { apiUrl } from '../../config/url';
import * as types from './types'

const getSinglePost = (id) => {
    return (dispatch) => { 
      dispatch({ type: types.GET_SINGLE_POST });
      return axios.get(`${apiUrl}/posts/${id}`).then(  
        post =>dispatch({ type: types.GET_SINGLE_POST_SUCCESS, post:post.data }),
        err => dispatch({ type: types.GET_SINGLE_POST_FAILURE, err })
      );
    };
  };

export default getSinglePost