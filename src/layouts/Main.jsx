import React from 'react';
import Navbar from '../pages/Shared/Headers/Navbar';
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className='relative'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;