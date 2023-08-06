import React from 'react';
import useTheme from '../../hooks/useTheme';

const IconCart = ({imgUrl, title, hoverImg}) => {
    const {isDarkMode} = useTheme();
    return (
        <div className={`h-[150px] md:h-[200px] w-full ${isDarkMode ? 'bg-[#212226] border border-gray-700' : 'bg-white'} shadow-md group-hover:shadow-lg flex flex-col justify-center items-center rounded-md group hover:-translate-y-2 duration-500`}>
          <div className={` h-24 w-24 rounded-full ${isDarkMode ? 'bg-gray-300' : 'bg-gray-100'} relative overflow-hidden `}>
            <div className="w-[70px] h-[70px] absolute z-10 rounded-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <img
                src={imgUrl}
                className="group-hover:-translate-y-[120%] transition-all duration-500"
              ></img>
              <img
                src={hoverImg}
                className="translate-y-10 group-hover:-translate-y-[100%] transition-all duration-500"
              ></img>
            </div>
            <div className="absolute top-0 left-0 w-full h-full rounded-full bg-primary translate-y-[100%] group-hover:translate-y-0 transition-all duration-500 "></div>
          </div>
          <h1 className={`text-lg md:text-xl font-extrabold pt-2 duration-500 ${isDarkMode ? 'text-gray-200' : ''}`}>{title}</h1>
        </div>
    );
};

export default IconCart;