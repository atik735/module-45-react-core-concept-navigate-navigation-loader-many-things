import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const postDtl = useLoaderData()
    const {title,id,body} =postDtl;

    let navigate = useNavigate()
    
    return (
        <div className='border border-amber-400 p-5 m-3 w-4/6'>
            <h2 className='text-2xl'>Post Details</h2>
            <h3 className='text-lg font-bold'>Title : {title}</h3>
            <h3 className='text-lg '> Post Body:{body}</h3>

            <button onClick={()=>{navigate(-1)}}>Go back</button>
            
        </div>
    );
};

export default PostDetails;