import React from "react";
import SubNavbar from "./SubNavbar";

const Navbar = () => {
  return (
    <div className="inset-x-0 absolute top-0 z-10 text-white">
      <SubNavbar></SubNavbar>
      <div className="w-full h-[1px] bg-[#313434]"></div>
    </div>
  );
};

export default Navbar;
