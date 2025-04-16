import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const user = use(userPromise);
    
    return (
        <div>
            <h2>Name:{user.name}</h2>
            <h2>email:{user.email}</h2>
            <h2>Website:{user.website}</h2>
            <h2>User Name:{user.username}</h2>
        </div>
    );
};

export default UserDetails2;