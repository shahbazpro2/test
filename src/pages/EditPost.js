import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import PostForm from './../components/PostForm';
import { useParams } from 'react-router-dom';
import getSinglePost from '../redux/actions/GetSinglePost';

const EditPost = () => {
    const allPosts = useSelector(state => state.allPosts)
    let { id } = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSinglePost(id))
    }, [])
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
