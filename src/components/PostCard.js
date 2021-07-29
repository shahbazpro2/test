import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = ({ post, removePostFun }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{`${post.id}-${post.title}`}</h5>
        <p className="card-text">{post.body}</p>
        <div className="d-flex justify-content-evenly">
          <Link to={`/post/${post.id}`} className="btn btn-sm btn-primary">See more</Link>
          <Link to={`/edit/${post.id}`} className="btn btn-sm btn-success">Edit</Link>
          <button className="btn btn-sm btn-danger" onClick={() => removePostFun(post.id)}>Remove</button>
        </div>

      </div>
    </div>
  )
}

export default PostCard
