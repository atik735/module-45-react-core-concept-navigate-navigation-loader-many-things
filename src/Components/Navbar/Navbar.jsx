import React from 'react';

const Navbar = () => {
    return (
            <nav>
                <ul style={{display:"flex",gap:"30px"}}>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Services</li>
                </ul>
            </nav>
    );
};

export default Navbar;