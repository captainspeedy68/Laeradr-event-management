import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';
import BackgroundImage from './BackgroundImage';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            {/* <BackgroundImage></BackgroundImage> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer className = "max-w-none"></Footer>
        </div>
    );
};

export default Root;