import React, { useEffect, useState } from "react";

const backgrounds = [
  "url(https://i.ibb.co/sv4htRb/banner-bg-1.jpg)", // Replace with your actual image URLs
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
    transform: showAnimation ? "scale(1.1)" : "scale(1)",
  };
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="w-full h-full" style={backgroundStyle}></div>
    </div>
  );
};

export default Banner;
