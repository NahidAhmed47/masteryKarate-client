import React, { useEffect, useState } from "react";
import useTheme from "../../../hooks/useTheme";
import { BsMoonStarsFill, BsFillBrightnessHighFill } from "react-icons/bs";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUserAlt } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const { user, logOut } = useAuth();
  const toggleMenu = () => {
    setOpenMenu(!isOpenMenu);
  };
  const location = useLocation();
  const navigate = useNavigate();
  const handleProfile = () => {
    setProfile(!profile);
  };
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="max-w-[1520px] mx-auto py-3 mt-2 flex px-4 2xl:px-0 justify-between items-center  sticky top-0">
      <div className="lg:hidden">
        <FaBars
          className={
            !isOpenMenu
              ? `${
                  location.pathname === "/"
                    ? "lg:hidden w-6 h-6 text-white"
                    : `${
                        isDarkMode
                          ? "lg:hidden w-6 h-6 text-white"
                          : "lg:hidden w-6 h-6 text-black"
                      }`
                }`
              : "hidden"
          }
          onClick={toggleMenu}
        ></FaBars>
      </div>
      {/* logo */}
      <Link to="/">
        <div className="flex justify-center items-center gap-2 ">
          <img
            className="w-8 md:w-16"
            src="https://i.ibb.co/TtWvLPx/mastery-karate-logo.png"
            alt=""
          />
          <h1
            className={`text-xl sm:text-3xl font-kanit font-extrabold ${
              location.pathname !== "/" && isDarkMode
                ? "text-white"
                : `${
                    location.pathname === "/" ? "text-white" : "text-gray-900"
                  }`
            }`}
          >
            Mastery<span className="text-primary">Karate</span>
          </h1>
        </div>
      </Link>
      {/* nav link */}
      {isOpenMenu && (
        <button
          onClick={toggleMenu}
          className="bg-black lg:hidden bg-opacity-30 fixed top-0 left-0 right-0 bottom-0 z-[49]"
        ></button>
      )}
      <div
        className={
          isOpenMenu
            ? `${
                isDarkMode
                  ? "bg-darkcolor fixed h-screen bottom-0 z-[100] top-0 left-0 p-6 gap-2 flex flex-col shadow-md lg:hidden"
                  : "bg-white fixed h-screen bottom-0 z-[100] top-0 left-0 p-6 gap-2 flex flex-col shadow-md lg:hidden"
              }`
            : "hidden lg:flex items-center md:gap-8"
        }
      >
        <FaTimes
          className={
            isOpenMenu
              ? ` ${`${
                  isDarkMode
                    ? "lg:hidden w-6 h-6 text-white"
                    : "lg:hidden w-6 h-6 text-black"
                }`}`
              : "hidden"
          }
          onClick={toggleMenu}
        ></FaTimes>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `text-primary font-kanit ${
                  location.pathname === "/" ? "font-medium" : "font-semibold"
                }`
              : `${
                  location.pathname === "/"
                    ? "text-black lg:text-white font-medium font-kanit"
                    : `${
                        isDarkMode
                          ? "text-white md:font-semibold font-kanit"
                          : "text-gray-700 md:font-semibold font-kanit"
                      }`
                }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/classes"
          className={({ isActive }) =>
            isActive
              ? `text-primary font-kanit ${
                  location.pathname === "/" ? "font-medium" : "font-semibold"
                }`
              : `${
                  location.pathname === "/"
                    ? "text-black lg:text-white  font-medium font-kanit"
                    : `${
                        isDarkMode
                          ? "text-white md:font-semibold font-kanit"
                          : "text-gray-700 md:font-semibold font-kanit"
                      }`
                }`
          }
        >
          Classes
        </NavLink>
        <NavLink
          to="/instructors"
          className={({ isActive }) =>
            isActive
              ? `text-primary font-kanit ${
                  location.pathname === "/" ? "font-medium" : "font-semibold"
                }`
              : `${
                  location.pathname === "/"
                    ? "text-black lg:text-white  font-medium font-kanit"
                    : `${
                        isDarkMode
                          ? "text-white md:font-semibold font-kanit"
                          : "text-gray-700 md:font-semibold font-kanit"
                      }`
                }`
          }
        >
          Instructors
        </NavLink>
        {user && (
          <NavLink
            to="/dashboard/home"
            className={({ isActive }) =>
              isActive
                ? `text-primary font-kanit ${
                    location.pathname === "/" ? "font-medium" : "font-semibold"
                  }`
                : `${
                    location.pathname === "/"
                      ? "text-black lg:text-white  font-medium font-kanit"
                      : `${
                          isDarkMode
                            ? "text-white md:font-semibold font-kanit"
                            : "text-gray-700 md:font-semibold font-kanit"
                        }`
                  }`
            }
          >
            Dashboard
          </NavLink>
        )}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? `text-primary font-kanit ${
                  location.pathname === "/" ? "font-medium" : "font-semibold"
                }`
              : `${
                  location.pathname === "/"
                    ? "text-black lg:text-white  font-medium font-kanit"
                    : `${
                        isDarkMode
                          ? "text-white md:font-semibold font-kanit"
                          : "text-gray-700 md:font-semibold font-kanit"
                      }`
                }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contract"
          className={({ isActive }) =>
            isActive
              ? `text-primary font-kanit ${
                  location.pathname === "/" ? "font-medium" : "font-semibold"
                }`
              : `${
                  location.pathname === "/"
                    ? "text-black lg:text-white  font-medium font-kanit"
                    : `${
                        isDarkMode
                          ? "text-white md:font-semibold font-kanit"
                          : "text-gray-700 md:font-semibold font-kanit"
                      }`
                }`
          }
        >
          Contract
        </NavLink>
        {/* login and them mode btn for mobile device */}
        <div className="md:hidden flex flex-col items-center gap-4">
          {user ? (
            <div
              className="overflow-hidden w-[35px] h-[35px] rounded-full "
              onClick={handleProfile}
            >
              {user.photoURL === null ? (
                <FaUserAlt className="w-full h-full text-secondary"></FaUserAlt>
              ) : (
                <img
                  src={user.photoURL}
                  className="w-full h-full rounded-full origin-center duration-300"
                  alt=""
                  title={user.displayName}
                />
              )}
            </div>
          ) : (
            <Link to="/login">
              <button
                className={`my-btn ${
                  isDarkMode
                    ? "text-white"
                    : `${
                        location.pathname === "/"
                          ? "text-white"
                          : "text-gray-900"
                      }`
                }`}
              >
                Get In Touch
              </button>
            </Link>
          )}
          <div
            onClick={handleProfile}
            className={`w-[250px] z-10 h-fit absolute  rounded-md shadow-md hover:shadow-2xl ${
              isDarkMode ? "bg-darkcolor" : "bg-white"
            } py-8 px-5 ${
              profile
                ? "-top-0 left-20 md:left-auto md:top-12 md:right-12 "
                : "hidden"
            } `}
          >
            <div className="w-[120px] h-[120px] mx-auto rounded-full border-2 border-primary overflow-hidden">
              <img
                src={user?.photoURL}
                className="w-[120px] h-[120px] mx-auto rounded-full"
                alt="profile"
              />
            </div>
            <div
              className={`text-center  mt-5 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <h1 className="text-base font-bold">Name: {user?.displayName}</h1>
              <p className="text-xs mt-3">Email: {user?.email}</p>
              <p
                className={
                  user?.emailVerified
                    ? "text-xs text-white mt-1"
                    : "text-xs text-red-500 mt-1"
                }
              >
                {user?.emailVerified
                  ? "Your Email has been verified!"
                  : "Your Email is not verified!"}
              </p>
              <div
                className="mt-4 my-btn hover:text-white"
                onClick={handleLogOut}
              >
                Logout
              </div>
            </div>
          </div>
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
      {/* user/login for big device */}
      <div className="md:flex justify-center items-center gap-4 hidden relative">
        {user ? (
          <div
            className="overflow-hidden w-[35px] h-[35px] rounded-full "
            onClick={handleProfile}
          >
            {user.photoURL === null ? (
              <FaUserAlt className="w-full h-full text-secondary"></FaUserAlt>
            ) : (
              <img
                src={user.photoURL}
                className="w-full h-full rounded-full origin-center duration-300"
                alt=""
                title={user.displayName}
              />
            )}
          </div>
        ) : (
          <Link to="/login">
            <button
              className={`my-btn relative  group overflow-hidden w-[138px] h-[42px] ${
                isDarkMode
                  ? "text-white"
                  : `${
                      location.pathname === "/" ? "text-white" : "text-gray-900"
                    }`
              }`}
            >
              <h1 className="absolute z-20 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full group-hover:text-white duration-500">Get In Touch</h1>
              <div className="bg-primary z-[10] absolute top-0 left-0 h-0 w-0 rounded-full group-hover:h-full group-hover:w-full duration-500"></div>
              <div className="bg-[#212226] z-[9] absolute bottom-0 right-0 h-0 w-0 rounded-full group-hover:h-full group-hover:w-full duration-500"></div>
            </button>
          </Link>
        )}
        <div
          onClick={handleProfile}
          className={`w-[250px] z-10 h-fit absolute  rounded-md shadow-md hover:shadow-2xl ${
            isDarkMode ? "bg-darkcolor" : "bg-white"
          } py-8 px-5 ${
            profile
              ? "-top-0 left-20 md:left-auto md:top-12 md:right-12 "
              : "hidden"
          } `}
        >
          <div className="w-[120px] h-[120px] mx-auto rounded-full border-2 border-primary overflow-hidden">
            <img
              src={user?.photoURL}
              className="w-[120px] h-[120px] mx-auto rounded-full"
              alt="profile"
            />
          </div>
          <div
            className={`text-center  mt-5 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <h1 className="text-base font-bold">Name: {user?.displayName}</h1>
            <p className="text-xs mt-3">Email: {user?.email}</p>
            <p
              className={
                user?.emailVerified
                  ? "text-xs text-white mt-1"
                  : "text-xs text-red-500 mt-1"
              }
            >
              {user?.emailVerified
                ? "Your Email has been verified!"
                : "Your Email is not verified!"}
            </p>
            <div
              className="mt-4 my-btn hover:text-white"
              onClick={handleLogOut}
            >
              Logout
            </div>
          </div>
        </div>

        {isDarkMode ? (
          <BsMoonStarsFill
            className={`w-6 h-6 ${
              isDarkMode
                ? "text-white"
                : `${
                    location.pathname === "/" ? "text-white" : "text-gray-900"
                  }`
            }`}
            onClick={toggleTheme}
          ></BsMoonStarsFill>
        ) : (
          <BsFillBrightnessHighFill
            className={`w-6 h-6 ${
              isDarkMode
                ? "text-white"
                : `${
                    location.pathname === "/" ? "text-white" : "text-gray-900"
                  }`
            }`}
            onClick={toggleTheme}
          ></BsFillBrightnessHighFill>
        )}
      </div>
    </div>
  );
};

export default Navbar;
