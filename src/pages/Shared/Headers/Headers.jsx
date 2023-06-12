import React, { useEffect, useState } from "react";
import SubNavbar from "./SubNavbar";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import useTheme from "../../../hooks/useTheme";

const Headers = () => {
  const location = useLocation();
  const {isDarkMode} = useTheme();
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className={`inset-x-0 ${scrollY > 58 ? `sticky -top-16 bg-darkcolor bg-opacity-70` : 'absolute top-0'}  z-10 text-white ${
        location.pathname !== "/" ? `${isDarkMode ? 'bg-darkcolor' : 'bg-white'}` : ""
      }`}
    >
      <div className={location.pathname !== '/' ? 'bg-black' : ''}>
        <SubNavbar></SubNavbar>
      </div>
      <div className="w-full h-[1px] bg-[#313434]"></div>
      <Navbar></Navbar>
    </div>
  );
};

export default Headers;
