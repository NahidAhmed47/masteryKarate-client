import React from 'react';
import { Outlet } from "react-router-dom";
import Headers from '../pages/Shared/Headers/Headers';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='relative'>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;