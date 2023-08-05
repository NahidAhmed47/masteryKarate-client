import React from 'react';
import ButtonFill from '../ButtonFill/ButtonFill';
import useTheme from '../../hooks/useTheme';

const PopularServicesCard = ({service}) => {
    const { isDarkMode } = useTheme();
    return (
        <div className='bg-opacity-0 rounded-md overflow-hidden shadow-md hover:shadow-xl duration-200'>
            <div className='bg-opacity-0'>
                <img src={service.img} alt="dfsd" />
            </div>
            <div className={` p-4 md:p-7 space-y-4 ${isDarkMode ? 'bg-[#212226]' : 'bg-white'}`}>
                <h1 className={`text-xl font-extrabold ${isDarkMode ? 'text-slate-200' : 'text-gray-700'} font-kanit`}>{service.title}</h1>
                <p className={`text-sm font-kanit ${isDarkMode ? 'text-slate-300' : 'text-gray-600'} font-medium`}>{service.description}</p>
                <ButtonFill name={'Read More'}></ButtonFill>
            </div>

        </div>
    );
};

export default PopularServicesCard;