import React from "react";
import useTheme from "../../hooks/useTheme";
import { FaEnvelope } from "react-icons/fa";
import ButtonOutline from "../ButtonOutline/ButtonOutline";

const InstructorCard = ({ instructor }) => {
  const {
    name,
    email,
    image,
    total_student,
    number_of_classes,
    name_of_classes,
  } = instructor;
  const { isDarkMode } = useTheme();
  return (
    <div className={`p-3 rounded-md border ${isDarkMode ? 'border-gray-500' : ''} grid sm:grid-cols-2 overflow-hidden`}>
      <div>
        <img src={image} className="w-[80%] mx-auto mb-3 sm:mb-0" alt="" />
      </div>
      <div className="flex flex-col justify-around">
        <h1
          className={`text-xl font-bold font-kanit duration-500 ${
            isDarkMode ? "text-gray-200" : "text-gray-900"
          }`}
        >
          Name: {name}
        </h1>
        <div
          className={`flex gap-2 duration-500 ${
            isDarkMode ? "text-gray-200" : "text-gray-900"
          } items-center`}
        >
          <FaEnvelope className="w-4 h-4 text-primary"></FaEnvelope>
          {email}
        </div>
        <p
          className={`text-base font-medium font-kanit duration-500 ${
            isDarkMode ? "text-gray-200" : "text-gray-900"
          }`}
        >
          Total Class: {number_of_classes}
        </p>
        <p
          className={`text-base font-medium font-kanit duration-500 ${
            isDarkMode ? "text-gray-200" : "text-gray-900"
          }`}
        >
          Total Students: {total_student}
        </p>
        <span className={`font-semibold duration-500 ${isDarkMode ? "text-white" : ""}`}>
          Classes Name:
        </span>
        {/* TODO: CLASSES SET */}
        <div
          className={`text-xs flex font-medium font-kanit duration-500 ${
            isDarkMode ? "text-gray-200" : "text-gray-900"
          }`}
        >
          {name_of_classes?.slice(0, 4).map((name, index) => (
            <p key={index}>{name}, </p>
          ))}
          {name_of_classes.length > 2 ? "see more..." : ""}
        </div>
        <div className="w-full">
        <ButtonOutline text={"See All Classes"} ></ButtonOutline>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
