import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import useTheme from "../../hooks/useTheme";
import { Link } from "react-router-dom";

const ClassCard = ({ classes }) => {
    const {isDarkMode} = useTheme();
    if (!classes) {
        return null;
      }
  const {
    image,
    available_seats,
    description,
    instructor_name,
    name,
    number_of_student,
    price,
    rating,
    student_level,
    total_hours,
    total_review,
  } = classes;
  return (
    <div className="w-full h-full grid grid-cols-3 group gap-5  py-2 pr-2 md:pr-5 border-b items-center relative">
      <div className="w-full h-full overflow-hidden flex items-center">
        <img className="w-full group-hover:scale-[1.1] origin-center duration-500" src={image} alt="" />
      </div>
      <div className={`col-start-2 col-end-4 w-full h-full ${isDarkMode ? 'text-gray-200' : ''}`}>
        <h1 className={`text-lg font-bold font-kanit`}>{name}</h1>
        <p className={`text-sm font-normal `}>{description.length > 99 ? description.slice(0,99)+' see more...' : description}</p>
        <p className={`text-sm font-medium`}>{instructor_name}</p>
        <div className="flex items-center gap-2">
            <p className={`text-sm font-bold font-kanit text-orange-400`}>{rating}</p>
        <Rating
            emptySymbol={<FaRegStar className="text-orange-400" />}
            fullSymbol={<FaStar className="text-orange-400" />}
            fractions={2}
            initialRating={rating}
            readonly
          />
          <p className={`text-sm font-medium font-kanit`}>({total_review})</p>
        </div>
        <p className={`text-sm font-medium`}>Available Seats: {available_seats}</p>
        <div className={`text-xs font-normal flex gap-1`}>
            <p>{total_hours} total hours,</p>
            <p>{student_level}</p>
        </div>
      </div>
      <div className={`absolute top-1 right-0 font-bold ${isDarkMode ? 'text-gray-200' : 'text-black'}`}>
        <p>${price}</p>
      </div>
      <div className={`absolute bottom-2 right-1 hidden group-hover:inline-block`}>
        <Link><button className="text-sm font-bold bg-primary text-white px-2 py-1 animate-bounce">Select</button></Link>
      </div>
    </div>
  );
};

export default ClassCard;
