import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';

const Post = ({post}) => {
    let navigate =useNavigate();
    const {title,id} =post;
    const [visitHome,setVisitHome]=useState(false);

    const location = useLocation();
    console.log(location);
    

    if (visitHome) {
        return <Navigate to={"/"}></Navigate>
    }
    return (
        <div className='border-2 border-lime-500 p-5 m-4'>
            <h3 className='text-lg font-bold '>Title: {title}</h3>
            <Link to={`/posts/${id}`}><button>Post Details</button></Link>
            <button onClick={() => navigate(`/posts/${id}`)} className='ml-2'>Details of: {id}</button>

            
            <button onClick={() => setVisitHome(true)}>Visit Home</button>


        </div>
    );
};

export default Post;