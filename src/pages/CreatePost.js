import React, { useState, useEffect } from 'react'
import PostForm from '../components/PostForm'
import { useDispatch, useSelector } from 'react-redux';
import createPost from '../redux/actions/CreatePost';
import { useHistory } from 'react-router-dom';

const CreatePost = () => {
    const allPosts = useSelector(state => state.allPosts)
    const dispatch = useDispatch()
    let history = useHistory();
    const onSubmitFun = (values) => {
        dispatch(createPost(values, allPosts.posts))
        history.push('/')
    }
    return (
        <div>
            <PostForm onSubmitFun={onSubmitFun} title="Create post" />
        </div>
    )
}

export default CreatePost
