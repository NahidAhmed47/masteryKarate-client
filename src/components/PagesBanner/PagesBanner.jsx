import React from "react";
import { useLocation } from "react-router-dom";
import useTheme from "../../hooks/useTheme";

const PagesBanner = ({ img, title }) => {
    const {isDarkMode} = useTheme()
    const location = useLocation();
  return (
    <div className={`h-[45vh] w-full overflow-hidden ${isDarkMode ? 'bg-gray-500' : 'bg-gray-300'} pt-14 md:pt-40`}>
      <div className="max-container relative w-full h-full">
        <img className="absolute bottom-0 -right-14 md:-right-10" src={img} alt="" />
        <div className="pl-5 md:pl-10">
          <h1 className={`text-3xl font-kanit font-extrabold ${isDarkMode ? 'text-gray-100' : 'text-black'}`}>{title}</h1>
          <p className={`font-bold text-lg font-kanit mt-3 ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Home {location.pathname}</p>
        </div>
      </div>
    </div>
  );
};

export default PagesBanner;
