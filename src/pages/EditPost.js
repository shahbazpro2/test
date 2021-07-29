import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import PostForm from './../components/PostForm';
import { useParams, useHistory } from 'react-router-dom';
import getSinglePost from '../redux/actions/GetSinglePost';
import editPost from './../redux/actions/EditPost';

const EditPost = () => {
    const [isChangeUrl, setIsChangeUrl] = useState(false)
    const allPosts = useSelector(state => state.allPosts)
    const singlePost = useSelector(state => state.singlePost)
    let history = useHistory();
    let { id } = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSinglePost(id))
    }, [])
    const onSubmitFun = (values) => {
        dispatch(editPost({ ...values, id: Number(id) }, allPosts.posts))
        setIsChangeUrl(true)
    }
    useEffect(() => {
        if (isChangeUrl === true && allPosts.loading === false) {
            history.push('/')
        }
    }, [allPosts.loading])
    return (
        <div>
            <PostForm onSubmitFun={onSubmitFun} title="Update post" postData={{ title: singlePost.post.title, body: singlePost.post.body }} loading={allPosts.loading} />
        </div>
    )
}

export default EditPost
