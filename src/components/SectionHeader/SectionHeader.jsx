import React from 'react';
import useTheme from '../../hooks/useTheme';

const SectionHeader = ({title, subTitle}) => {
    const {isDarkMode} = useTheme();
    return (
        <div className='text-center my-5'>
            <p className='text-primary font-kanit text-base font-bold'>{subTitle}</p>
            <h1 className={`text-2xl md:text-3xl font-kanit font-extrabold ${isDarkMode ? 'text-gray-200' : 'text-black'}`}>{title}</h1>
        </div>
    );
};

export default SectionHeader;