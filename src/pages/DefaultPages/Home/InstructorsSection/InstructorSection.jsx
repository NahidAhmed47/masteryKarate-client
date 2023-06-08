import React, { useEffect, useState } from "react";
import useInstructors from "../../../../hooks/useInstructors";
import { BsQuote } from "react-icons/bs";

const InstructorSection = () => {
  const [instructors] = useInstructors();
  const [selectedInstructor, setSelectedInstructor] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const separateTopInstructors = (data, property) => {
    return [...data].reduce((acc, currentObj) => {
      const index = acc.findIndex(
        (item) => currentObj[property] >= item[property]
      );
      if (index === -1) {
        acc.push(currentObj);
      } else {
        acc.splice(index, 0, currentObj);
      }
      return acc;
    }, []);
  };
  const topInstructors = separateTopInstructors(
    instructors,
    "total_student"
  ).slice(0, 6);
  console.log(topInstructors);
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedInstructor(topInstructors[currentIndex]);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % topInstructors.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [topInstructors, currentIndex]);
  return (
    <div className="my-14 md:mt-24 h-fit md:h-[500px] md:mb-64  bg-cover bg-no-repeat w-full relative bg-[url('https://i.ibb.co/r6dXHBb/testimonial-bg-2.jpg')] bg-fixed bg-center ">
      <div className="w-full h-full bg-black bg-opacity-60 py-4">
        <div className="text-center mt-7 mb-3">
          <p className="text-primary font-kanit text-base font-bold">
            Best performer
          </p>
          <h1
            className={`text-2xl md:text-3xl font-kanit font-extrabold text-white md:mt-2`}
          >
            See Top Instructors
          </h1>
        </div>
        <div className=" w-full h-full max-container grid md:grid-cols-2 relative">
          <div className="p-4 md:p-8">
            <img
              className="w-[50%] mx-auto md:w-[90%] rounded-2xl"
              src={selectedInstructor.image}
              alt=""
            />
          </div>
          <div className="w-full h-full relative">
            <div className="space-y-2 flex flex-col items-center text-center md:space-y-5 md:absolute md:top-24 md:-left-8">
              <div className="p-3 rounded-full bg-white w-fit ">
                <BsQuote className="text-2xl font-bold text-primary"></BsQuote>
              </div>
              <p className="text-gray-400 text-xs md:text-base font-medium">
                “The questions are compiled from genuine questions that people
                ask. When the same or similar is question is asked by many
                people, we add it to this page, so if you have a question that
                is not listed us here, please don’t hesitate to ask through our
                painting and drawing Contact Page.”
              </p>
              <div>
                <h1 className="text-base md:text-xl font-extrabold text-white font-kanit">
                  {selectedInstructor.name}
                </h1>
                <p className="text-sm font-medium text-gray-300 mt-1">
                  Karate Trainer
                </p>
              </div>
            </div>
          </div>
          <div className="h-fit md:w-[53%] gap-2 p-2 md:p-0  md:gap-5 grid grid-cols-3 md:grid-cols-6 md:absolute right-0 -bottom-14">
            {topInstructors?.map((instructor) => (
              <div
                key={instructor._id}
                className={` border-2 rounded-md ${
                  selectedInstructor._id === instructor._id
                    ? "border-primary"
                    : ""
                }`}
                onClick={() => setSelectedInstructor(instructor)}
              >
                <img
                  className="w-full h-full rounded-md"
                  src={instructor.image}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
