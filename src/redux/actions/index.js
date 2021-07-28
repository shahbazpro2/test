import axios from 'axios';
import * as types from './types'

const getAllPosts = () => {
    return (dispatch) => { 
      dispatch({ type: types. });
      return axios.get('/api/auth/user').then(  
        user => dispatch({ type: GET_CURRENT_USER_SUCCESS, user }),
        err => dispatch({ type: GET_CURRENT_USER_FAILURE, err })
      );
    };
  };