import React, { useState } from "react";
import useTheme from "../../../hooks/useTheme";
import { BsMoonStarsFill, BsFillBrightnessHighFill } from "react-icons/bs";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpenMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!isOpenMenu);
  };
  const location = useLocation();
  return (
    <div className="max-w-[1520px] mx-auto py-5 flex px-4 md:px-0 justify-between items-center relative">
      <div className="md:hidden">
        {/* TODO: dark theme implement */}
        <FaTimes
          className={isOpenMenu ? "md:hidden w-6 h-6 text-white" : "hidden"}
          onClick={toggleMenu}
        ></FaTimes>
        <FaBars
          className={!isOpenMenu ? "md:hidden w-6 h-6 text-white" : "hidden"}
          onClick={toggleMenu}
        ></FaBars>
      </div>
      {/* logo */}
      <div className="flex justify-center items-center gap-2">
        <img
          className="w-8 md:w-16"
          src="https://i.ibb.co/TtWvLPx/mastery-karate-logo.png"
          alt=""
        />
        <h1 className={`text-3xl font-kanit font-extrabold ${location.pathname !== '/' && isDarkMode ? 'text-white' : `${location.pathname === '/' ? 'text-white' : 'text-gray-900'}`}`}>
          Mastery<span className="text-primary">Karate</span>
        </h1>
      </div>
      {/* nav link */}
      <div
        className={
          isOpenMenu
            ? `${
                isDarkMode
                  ? "bg-gray-600 absolute top-14 rounded left-3 p-4 gap-2 flex flex-col"
                  : "bg-white absolute top-14 rounded left-3 p-4 gap-2 flex flex-col"
              }`
            : "hidden md:flex items-center md:gap-8"
        }
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `text-primary font-kanit ${location.pathname === '/' ? 'font-medium' : 'font-semibold'}`
              : `${location.pathname === '/' ? "text-white font-medium font-kanit" : `${isDarkMode ? 'text-white md:font-semibold font-kanit' : 'text-gray-700 md:font-semibold font-kanit'}`}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/classes"
          className={({ isActive }) =>
            isActive
              ? `text-primary font-kanit ${location.pathname === '/' ? 'font-medium' : 'font-semibold'}`
              : `${location.pathname === '/' ? "text-white font-medium font-kanit" : `${isDarkMode ? 'text-white md:font-semibold font-kanit' : 'text-gray-700 md:font-semibold font-kanit'}`}`
          }
        >
          Classes
        </NavLink>
        <NavLink
          to="/instructors"
          className={({ isActive }) =>
            isActive
              ? `text-primary font-kanit ${location.pathname === '/' ? 'font-medium' : 'font-semibold'}`
              : `${location.pathname === '/' ? "text-white font-medium font-kanit" : `${isDarkMode ? 'text-white md:font-semibold font-kanit' : 'text-gray-700 md:font-semibold font-kanit'}`}`
          }
        >
          Instructors
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? `text-primary font-kanit ${location.pathname === '/' ? 'font-medium' : 'font-semibold'}`
              : `${location.pathname === '/' ? "text-white font-medium font-kanit" : `${isDarkMode ? 'text-white md:font-semibold font-kanit' : 'text-gray-700 md:font-semibold font-kanit'}`}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contract"
          className={({ isActive }) =>
            isActive
              ? `text-primary font-kanit ${location.pathname === '/' ? 'font-medium' : 'font-semibold'}`
              : `${location.pathname === '/' ? "text-white font-medium font-kanit" : `${isDarkMode ? 'text-white md:font-semibold font-kanit' : 'text-gray-700 md:font-semibold font-kanit'}`}`
          }
        >
          Contract
        </NavLink>
        <div className="md:hidden flex flex-col items-center gap-4">
          <Link to="/login">
            <button
              className={`px-4 py-1 rounded-full border border-primary text-base font-bold font-kanit hover:bg-red-500 hover:animate-pulse transition-all duration-300 ${
                isDarkMode && location.pathname !== '/' ? "text-white" : "text-gray-700 md:font-semibold"
              } `}
            >
              Login
            </button>
          </Link>
          {isDarkMode ? (
            <BsMoonStarsFill
              className={`w-6 h-6 ${
                isDarkMode ? "text-white" : "text-gray-700"
              }`}
              onClick={toggleTheme}
            ></BsMoonStarsFill>
          ) : (
            <BsFillBrightnessHighFill
              className={`w-6 h-6 ${
                isDarkMode ? "text-white" : "text-gray-700"
              }`}
              onClick={toggleTheme}
            ></BsFillBrightnessHighFill>
          )}
        </div>
      </div>
      {/* user/login */}
      <div className="md:flex justify-center items-center gap-4 hidden">
        <Link to="/login"><button className={`my-btn ${isDarkMode ? 'text-white' : `${location.pathname === '/' ? 'text-white' : 'text-gray-900'}`}`}>Login</button></Link>
        {isDarkMode ? (
          <BsMoonStarsFill
            className={`w-6 h-6 ${isDarkMode ? 'text-white' : `${location.pathname === '/' ? 'text-white' : 'text-gray-900'}`}`}
            onClick={toggleTheme}
          ></BsMoonStarsFill>
        ) : (
          <BsFillBrightnessHighFill
            className={`w-6 h-6 ${isDarkMode ? 'text-white' : `${location.pathname === '/' ? 'text-white' : 'text-gray-900'}`}`}
            onClick={toggleTheme}
          ></BsFillBrightnessHighFill>
        )}
      </div>
    </div>
  );
};

export default Navbar;
