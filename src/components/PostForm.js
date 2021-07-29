import React, { useEffect, useState } from 'react'
import { validate } from './FormValidate';

const PostForm = () => {
    const [state, setState] = useState({ title: '', body: '' })
    useEffect(() => {
        validate()
    }, [])
    const onChangeInput = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7">
                    <form className="g-3 needs-validation" noValidate onSubmit={onSubmit}>
                        <div className="py-2 text-left" >
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" name="title" onChange={onChangeInput} value={state.title} required />
                            <div className="invalid-feedback">
                                Please input title.
                            </div>
                        </div>

                        <div className="py-2 text-left">
                            <label htmlFor="body" className="form-label">Body</label>
                            <textarea className="form-control" name="body" onChange={onChangeInput} value={state.body} required></textarea>
                            <div className="invalid-feedback">
                                Please input body.
                            </div>
                        </div>
                        <div className="py-2">
                            <button className="btn btn-primary" type="submit">Create post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default PostForm
