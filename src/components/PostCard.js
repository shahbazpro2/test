import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = ({ data }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{`${data.id}-${data.title}`}</h5>
        <p className="card-text">{data.body}</p>
        <div className="d-flex justify-content-evenly">
        <Link href={`/post/${data.id}`} className="btn btn-sm btn-primary">See more</Link>
        <Link href="/" className="btn btn-sm btn-success">Edit</Link>
        <button className="btn btn-sm btn-danger">Remove</button>
        </div>
        
      </div>
    </div>
  )
}

export default PostCard
