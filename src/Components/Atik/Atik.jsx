import React from 'react';
import { NavLink, useNavigate } from 'react-router';

const Atik = () => {
    let navigate =useNavigate()
    return (
        <div>
            <h1>MY NAME IS ATIK</h1>
            <nav>
                <ul className='flex gap-5 justify-center'>
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/aboutUS'}>AboutUs</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/service'}>services</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/mobile'}>Mobile</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/users'}>Users</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/users2'}>Users2</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/posts'}>Posts</NavLink>
                    </li>
                    <button onClick={()=>{navigate("/mobile")}}>GO to Mobile</button>
                </ul>
            </nav>
        </div>
    );
};

export default Atik;