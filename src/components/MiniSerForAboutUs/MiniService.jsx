import React from "react";
import { FaCheckDouble } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";

const MiniService = ({heading, description}) => {
    const { isDarkMode } = useTheme();
  return (
    <div>
      <div className="flex gap-2 items-center">
        <FaCheckDouble className="w-4 h-4 text-primary"></FaCheckDouble>
        <h1
          className={`text-xl font-extrabold font-kanit ${
            isDarkMode ? "text-gray-200" : "text-black"
          }`}
        >
          {heading}
        </h1>
      </div>
      <p
        className={`font-kanit text-sm md:text-base mt-3 ${
          isDarkMode ? "text-gray-300" : "text-secondary"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default MiniService;
