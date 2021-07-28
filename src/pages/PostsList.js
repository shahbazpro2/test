import React from 'react'
import PostCard from '../components/PostCard'

const PostsList = () => {
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
