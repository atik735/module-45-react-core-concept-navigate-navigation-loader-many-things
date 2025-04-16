import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const UserDetails = () => {
    let navigate = useNavigate();
    const handleGoBack =() =>{
        navigate(-1)
    }

    // using params
    const params = useParams();
    console.log("params is", params.userDetails);
    //params use korar r ekta niom

    const {userDetails} =useParams()
    console.log("r ek niom",userDetails);
    // -------------------

    const userdata = useLoaderData();
        
    const {name,website,company,address:{street}} = userdata;
    return (
        <div className='border-2 p-5 m-3 border-teal-400'>

        <h2 className='text-2xl font-bold'>{name}</h2>
        <p>Company: {company.name}</p>
        <p>Website: {website}</p>
        <p>Address: {street}</p>

        <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default UserDetails;