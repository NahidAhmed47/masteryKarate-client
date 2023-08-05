import React from 'react';
import ButtonFill from '../ButtonFill/ButtonFill';

const PopularServicesCard = ({service}) => {
    return (
        <div className='bg-opacity-0 rounded-md overflow-hidden shadow-md hover:shadow-xl duration-200'>
            <div className='bg-opacity-0'>
                <img src={service.img} alt="dfsd" />
            </div>
            <div className='bg-white p-4 md:p-7 space-y-4'>
                <h1 className='text-xl font-extrabold text-gray-700 font-kanit'>{service.title}</h1>
                <p className='text-sm font-kanit text-slate-600 font-medium'>{service.description}</p>
                <ButtonFill name={'Read More'}></ButtonFill>
            </div>

        </div>
    );
};

export default PopularServicesCard;