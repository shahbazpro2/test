import React from 'react'
import { useSelector } from 'react-redux'

const SinglePost = () => {
    const singlePost=useSelector(state=>state.singlePost)
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h1>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h1>
                    <p className="mt-2">
                        quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto
                    </p>
                </div>
            </div>

        </div>
    )
}

export default SinglePost
