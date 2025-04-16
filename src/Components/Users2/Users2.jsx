import React, { use } from 'react';


const Users2 = ({UsersPromise}) => {

    const users2 = use(UsersPromise);
    console.log("users2 suspense data load",users2);
    

    return (
        <div>
            <h3>hi i am users 2</h3>
        </div>
    );
};

export default Users2;