import React, { Suspense, useState } from 'react';
import { Link, useNavigate, useNavigation } from 'react-router';
import UserDetails2 from '../UserDetails/UserDetails2';

const User = ({user}) => {
    // console.log(user);
    const {id,name,email,phone} = user;
    //navigate use
    let navigate = useNavigate()
    const handleDetails = () =>{
        navigate(`/users/${id}`)
    }

    //navigation use mane loading korano

    const navigation = useNavigation()
    const isNavigation = Boolean(navigation.location);

    //show info btn work dynamically show data in same page

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())

    const [showInfo,setShowInfo] =useState(false)

    return (
        <div className='border-2 border-amber-400 p-5 m-3'>
            {isNavigation && <span className='text-5xl text-red-500'>Loading.........</span>}
            <h2 className='text-2xl'>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>

            <Link to={`/users/${id}`}>Show Details</Link>

            <button className='mx-4' onClick={handleDetails}>Details</button>

            <button onClick={() =>{setShowInfo(!showInfo)}}>{showInfo?"Hide":"Show"} Info</button>

                {
                    showInfo && <Suspense fallback={<h2>Loading.......</h2>}><UserDetails2 userPromise={userPromise}></UserDetails2></Suspense>
                }
        </div>
    );
};

export default User;