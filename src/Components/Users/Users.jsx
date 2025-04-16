import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User'
// import UserDetails from '../UserDetails/UserDetails';
const Users = () => {
    const users = useLoaderData();
    // console.log(users);
    
    return (
        <div>
            <h3>I am Users</h3>
        <div className='grid md:grid-cols-2'>
        {
            users.map(user => <User key={user.id} user={user}></User>)
        }
        </div>
        </div>
    );
};

export default Users;