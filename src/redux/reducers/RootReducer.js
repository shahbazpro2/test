import { combineReducers } from 'redux'
import getAllPostsReducer from './GetAllPostsReducer';
import getSinglePostReducer from './GetSinglePostReducer';

const RootReducer = combineReducers({
    allPosts: getAllPostsReducer,
    singlePost: getSinglePostReducer
})
export default RootReducer;