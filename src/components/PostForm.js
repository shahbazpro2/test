import React from 'react'

const PostForm = () => {
    return (
        <form className="row g-3 needs-validation" novalidate>
            <div className="col-md-4">
                <label for="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" value="title" required />
            </div>
            <div className="col-md-4">
                <label for="body" className="form-label">Body</label>
                <input type="text" className="form-control" id="body" value="title" required />
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
    )
}

export default PostForm
