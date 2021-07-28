import axios from 'axios';
import * as types from './types'

const getAllPosts = () => {
    return (dispatch) => { 
      dispatch({ type: types.GET_ALL_POSTS });
      return axios.get('/posts').then(  
        posts => dispatch({ type: types.GET_ALL_POSTS_SUCCESS, posts }),
        err => dispatch({ type: types.GET_ALL_POSTS_FAILURE, err })
      );
    };
  };