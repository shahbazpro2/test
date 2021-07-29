import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostCard from '../components/PostCard'
import getAllPosts from '../redux/actions/GetAllPosts';
import removePost from './../redux/actions/RemovePost';
import { Link } from 'react-router-dom';

const PostsList = () => {
    const allPosts = useSelector(state => state.allPosts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllPosts())
    }, [])

    const removePostFun = (id) => {
        const confirm = window.confirm("Are you sure you want to delete?")
        if (confirm === true) {
            dispatch(removePost(id, allPosts.posts))
        }
    }
    return (
        <div className="container">
            <Link to="/post/create" className="btn btn-primary mb-3">Create a new post</Link>
            <div className="row">
                {allPosts.posts.map((post) => (
                    <div key={post.id} className="col-md-4 my-2">
                        <PostCard post={post} removePostFun={removePostFun} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostsList
