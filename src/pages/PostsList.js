import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostCard from '../components/PostCard'
import removePost from './../redux/actions/RemovePost';
import { Link } from 'react-router-dom';

const PostsList = () => {
    const allPosts = useSelector(state => state.allPosts)
    const dispatch = useDispatch()
    const removePostFun = (id) => {
        const confirm = window.confirm("Are you sure you want to delete?")
        if (confirm === true) {
            dispatch(removePost(id, allPosts.posts))
        }
    }
    return (
        <div className="container">
            <Link to="/create" className="btn btn-primary mb-3">Create a new post</Link>
            <div className="row">
                {allPosts.loading === true ? <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> :
                    allPosts.posts.map((post) => (
                        <div key={post.id} className="col-md-4 my-2">
                            <PostCard post={post} removePostFun={removePostFun} />
                        </div>
                    )).reverse()}
            </div>
        </div>
    )
}

export default PostsList
