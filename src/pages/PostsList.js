import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostCard from '../components/PostCard'
import getAllPosts from '../redux/actions/GetAllPosts';

const PostsList = () => {
    const state = useSelector(state => state.allPosts)
    const dispatch=useDispatch()
    const [posts,setPosts]=useState(state.posts)
    useEffect(() => {
       dispatch(getAllPosts())
    }, [])
    return (
        <div className="container">
            <div className="row">
               <div className="col-md-4">
                    <PostCard />
               </div>
               <div className="col-md-4">
               <PostCard />
               </div>
               <div className="col-md-4">
               <PostCard />
               </div>
            </div>
        </div>
    )
}

export default PostsList
