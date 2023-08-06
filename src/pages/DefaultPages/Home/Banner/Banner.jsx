import React, { useEffect, useState } from "react";
import ButtonFill from "../../../../components/ButtonFill/ButtonFill";
import { Slide } from "react-awesome-reveal";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const backgrounds = [
  "url(https://i.ibb.co/sv4htRb/banner-bg-1.jpg)",
  "url(https://i.ibb.co/bmfP0Zg/banner-bg-2.jpg)",
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowAnimation(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
        );
        setShowAnimation(false);
      }, 1000);
    }, 8000);

    return () => clearInterval(timer); // Clear the timer on component unmount
  }, []);
  const backgroundStyle = {
    backgroundImage: backgrounds[currentIndex],
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "transform 1s", // Set transition duration to 500ms
    transform: showAnimation ? "scale(1.03)" : "scale(1)",
  };
  return (
    <div className="w-full h-[60vh] lg:h-screen overflow-hidden">
      <div className="w-full h-full" style={backgroundStyle}>
        <div className="h-full max-w-[1520px] mx-auto flex justify-start items-center relative">
          <div className="max-w-[700px] space-y-4 md:space-y-8 md:mt-16 px-4 2xl:px-0 overflow-hidden">
            <Slide>
              <h1 className="text-4xl lg:text-7xl font-kanit font-extrabold text-white">
                Let's Yourself Be Challenged
              </h1>
            </Slide>
            <p className="text-[#b8b8b8] font-kanit ">
              Unleash your inner strength and embrace the art of mastery with
              our Karate training program. Join us on a journey of discipline,
              focus, and self-defense techniques, guided by experienced
              instructors.
            </p>
            <div className="flex gap-4">
              <Link to="/contact"><ButtonFill name="Contract Us"></ButtonFill></Link>
              <Link to="/about">
              <button className="w-[155px] h-[42px]  border border-primary rounded-full  font-medium relative overflow-hidden group">
                <div className="flex items-center text-white justify-center w-full gap-1 z-20 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] group-hover:text-white duration-500">
                  More About Us
                </div>
                <div className="bg-primary z-[10] absolute top-0 left-0 h-0 w-0 rounded-full group-hover:h-full group-hover:w-full duration-500"></div>
                <div className="bg-[#212226] z-[9] absolute bottom-0 right-0 h-0 w-0 rounded-full group-hover:h-full group-hover:w-full duration-500"></div>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
