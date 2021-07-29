import React from 'react'

const PostForm = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7">
                    <form className="g-3 needs-validation" novalidate>
                        <div className="py-2">
                            <label for="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" required />
                        </div>
                        <div className="py-2">
                            <label for="body" className="form-label">Body</label>
                            <textarea class="form-control" id="body" required></textarea>
                        </div>
                        <div className="py-2">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default PostForm
