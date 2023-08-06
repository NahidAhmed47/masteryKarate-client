import React from "react";
import { Outlet } from "react-router-dom";
import Headers from "../pages/Shared/Headers/Headers";
import Footer from "../pages/Shared/Footer/Footer";
import useTheme from "../hooks/useTheme";

const Main = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`relative duration-500 ${
        isDarkMode ? "bg-darkcolor" : "bg-white"
      }`}
    >
      <Headers></Headers>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
