import { combineReducers } from 'redux'
import getAllPostsReducer from './GetAllPostsReducer';
import getSinglePost from './../actions/GetSinglePost';

const RootReducer = combineReducers({
    allPosts: getAllPostsReducer,
    singlePost: getSinglePost
})
export default RootReducer;