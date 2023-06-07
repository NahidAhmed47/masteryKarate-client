import React, { useContext } from "react";
import useTheme from "../../../hooks/useTheme";
import { BsMoonStarsFill, BsFillBrightnessHighFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const {isDarkMode, toggleTheme} = useTheme();
  return (
    <div className="max-w-[1520px] mx-auto py-5 flex justify-between items-center">
      {/* logo */}
      <div className="flex justify-center items-center gap-2">
        <img className="w-10 md:w-16" src="https://i.ibb.co/TtWvLPx/mastery-karate-logo.png" alt="" />
        <h1 className="text-3xl font-kanit font-extrabold">Mastery<span className='text-primary'>Karate</span></h1>
      </div>
      {/* nav link */}
      <div className="flex items-center md:gap-8">
        <NavLink to="/" className={({isActive})=> isActive ? 'text-primary font-kanit font-medium' : 'text-white font-kanit font-medium'}>Home</NavLink>
        <NavLink to="/classes" className={({isActive})=> isActive ? 'text-primary font-kanit font-medium' : 'text-white font-kanit font-medium'}>Classes</NavLink>
        <NavLink to="/instructors" className={({isActive})=> isActive ? 'text-primary font-kanit font-medium' : 'text-white font-kanit font-medium'}>Instructors</NavLink>
        <NavLink to="/about" className={({isActive})=> isActive ? 'text-primary font-kanit font-medium' : 'text-white font-kanit font-medium'}>About</NavLink>
        <NavLink to="/contract" className={({isActive})=> isActive ? 'text-primary font-kanit font-medium' : 'text-white font-kanit font-medium'}>Contract</NavLink>
      </div>
      {/* user/login */}
      <div className="flex justify-center items-center gap-4">
        <button className="my-btn">Login</button>
        {
          isDarkMode ? <BsMoonStarsFill className="w-6 h-6" onClick={toggleTheme}></BsMoonStarsFill> : <BsFillBrightnessHighFill className="w-6 h-6" onClick={toggleTheme}></BsFillBrightnessHighFill>
        }
      </div>
    </div>
  );
};

export default Navbar;
