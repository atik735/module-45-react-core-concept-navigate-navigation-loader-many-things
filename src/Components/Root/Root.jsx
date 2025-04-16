import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Atik from '../Atik/Atik';
import Footer from '../Footer/Footer';
import SideNav from '../SideNav/SideNav';

const Root = () => {
    const navigation =useNavigation()
    const isNaVigation = Boolean(navigation.location);
    return (
        <div>
            <Atik></Atik>
            <div className='flex items-center justify-center gap-10'>
                <SideNav></SideNav>
                {isNaVigation && <span className='text-4xl text-pink-500'>Please wait.Loading.........</span>}
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;