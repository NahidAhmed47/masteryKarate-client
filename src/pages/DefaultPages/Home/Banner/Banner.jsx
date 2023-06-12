import React, { useEffect, useState } from "react";
import ButtonFill from "../../../../components/ButtonFill/ButtonFill";
import { Slide } from "react-awesome-reveal";

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
              Unleash your inner strength and embrace the art of mastery with our Karate training program. Join us on a journey of discipline, focus, and self-defense techniques, guided by experienced instructors.
            </p>
            <div className="flex gap-4">
              {/* <button className="my-btn-fill">Contract Us</button> */}
              <ButtonFill name="Contract Us"></ButtonFill>
              <button className="my-btn text-white">More About Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
