import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import getSinglePost from '../redux/actions/GetSinglePost'

const SinglePost = () => {
    const singlePost = useSelector(state => state.singlePost)
    let { id } = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSinglePost(id))
    }, [])
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h1>{singlePost.post.title}</h1>
                    <p className="mt-2">
                        {singlePost.post.body}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default SinglePost
