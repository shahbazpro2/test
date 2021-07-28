import { combineReducers } from 'redux'
import getAllPostsReducer from './GetAllPostsReducer';

const RootReducer = combineReducers({
    allPosts:getAllPostsReducer
})
export default RootReducer;