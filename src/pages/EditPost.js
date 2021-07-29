import React from 'react'
import { useSelector } from 'react-redux';
import PostForm from './../components/PostForm';

const EditPost = () => {
    const allPosts = useSelector(state => state.allPosts)
    const onSubmitFun = (values) => {
        console.log(values)
    }
    return (
        <div>
            <PostForm onSubmitFun={onSubmitFun} title="Update post" loading={allPosts.loading} />
        </div>
    )
}

export default EditPost
