import React from 'react';
import { Outlet } from "react-router-dom";
import Headers from '../pages/Shared/Headers/Headers';

const Main = () => {
    return (
        <div className='relative'>
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;