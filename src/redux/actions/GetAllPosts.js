import axios from 'axios';
import { apiUrl } from '../../config/url';
import * as types from './types'

const getAllPosts = () => {
    return (dispatch) => { 
      dispatch({ type: types.GET_ALL_POSTS });
      return axios.get(`${apiUrl}/posts`).then(  
        posts =>dispatch({ type: types.GET_ALL_POSTS_SUCCESS, posts:posts.data }),
        err => dispatch({ type: types.GET_ALL_POSTS_FAILURE, err })
      );
    };
  };

export default getAllPosts