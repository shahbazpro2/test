import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = ({ post }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{`${post.id}-${post.title}`}</h5>
        <p className="card-text">{post.body}</p>
        <div className="d-flex justify-content-evenly">
        <Link to={`/post/${post.id}`} className="btn btn-sm btn-primary">See more</Link>
        <Link href="/" className="btn btn-sm btn-success">Edit</Link>
        <button className="btn btn-sm btn-danger">Remove</button>
        </div>
        
      </div>
    </div>
  )
}

export default PostCard
