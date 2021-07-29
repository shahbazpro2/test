import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostCard from '../components/PostCard'
import getAllPosts from '../redux/actions/GetAllPosts';

const PostsList = () => {
    const state = useSelector(state => state.allPosts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllPosts())
    }, [])
    return (
        <div className="container">
            <div className="row">
                {state.posts.map((post) => (
                    <div key={post.id} className="col-md-4 my-2">
                        <PostCard data={post} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostsList
