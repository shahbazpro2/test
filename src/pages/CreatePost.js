import React from 'react'
import PostForm from '../components/PostForm'

const CreatePost = () => {
    const onSubmitFun=(values)=>{
        console.log(values)
    }
    return (
        <div>
            <PostForm onSubmitFun={onSubmitFun} />
        </div>
    )
}

export default CreatePost
