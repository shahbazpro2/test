import React from 'react'
import PostForm from '../components/PostForm'

const CreatePost = () => {
    const onSubmitFun=(values)=>{
        console.log(values)
    }
    return (
        <div>
            <PostForm onSubmitFun={onSubmitFun} title="create" />
        </div>
    )
}

export default CreatePost
