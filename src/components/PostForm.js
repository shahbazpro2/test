import React, { useEffect, useState } from 'react'
import { validate } from './FormValidate';

const PostForm = ({ postData, onSubmitFun, title, loading }) => {
    const [state, setState] = useState({ title: '', body: '' })
    useEffect(() => {
        validate()
    }, [])
    useEffect(() => {
        setState({ title: postData?.title, body: postData?.body })
    }, [postData])
    const onChangeInput = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        onSubmitFun(state)
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
                            <button className="btn btn-primary" disabled={loading} type="submit">{title}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
PostForm.defaultProps = {
    postData: { title: '', body: '' }
}
export default PostForm
