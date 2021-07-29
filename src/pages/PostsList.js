import React from 'react'
import { useSelector } from 'react-redux'
import PostCard from '../components/PostCard'

const PostsList = () => {
    const state = useSelector(state => state.allPosts)
    

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
