import React from 'react'

const PostCard = ({ data }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{`${data.id}-${data.title}`}</h5>
        <p className="card-text">{data.body}</p>
        <a href="/" className="btn btn-primary">see more</a>
      </div>
    </div>
  )
}

export default PostCard
