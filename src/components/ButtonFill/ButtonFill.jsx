import React from 'react';
import useTheme from '../../hooks/useTheme';
import { BsArrowRightShort } from "react-icons/bs";

const ButtonFill = ({name}) => {
    const {isDarkTheme} = useTheme();
    return (
        <button className={`px-5 py-2 rounded-full border border-primary text-base font-bold font-kanit bg-primary hover:animate-pulse transition-all duration-300 text-white flex justify-center items-center`} >
            {name}
            <BsArrowRightShort className='w-6 h-6 '></BsArrowRightShort>
        </button>
    );
};

export default ButtonFill;