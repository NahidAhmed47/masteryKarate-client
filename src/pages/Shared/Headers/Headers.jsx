import React from "react";
import SubNavbar from "./SubNavbar";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import useTheme from "../../../hooks/useTheme";

const Headers = () => {
  const location = useLocation();
  const {isDarkMode} = useTheme();
  return (
    <div
      className={`inset-x-0 absolute top-0 z-10 text-white ${
        location.pathname !== "/" ? `${isDarkMode ? 'bg-darkcolor' : 'bg-white'}` : ""
      }`}
    >
      <div className={location.pathname !== '/' ? 'bg-darkcolor' : ''}>
        <SubNavbar></SubNavbar>
      </div>
      <div className="w-full h-[1px] bg-[#313434]"></div>
      <Navbar></Navbar>
    </div>
  );
};

export default Headers;
