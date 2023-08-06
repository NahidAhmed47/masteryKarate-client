import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import useTheme from "../../hooks/useTheme";
import { Link } from "react-router-dom";
import useRole from "../../hooks/useRole";
import useSelectedClass from "../../hooks/useSelectedClass";
const ClassCard = ({ classes, children, updateStatus, setCurrentModalId, selectClass, spin}) => {
    const {isDarkMode} = useTheme();
    const [selectedClasses, refetch] = useSelectedClass();
    const [selectedId, setSelectedId] = useState('')
    useEffect(()=>{
      const findSelectedClass = selectedClasses?.find(selected => selected === classes._id);
      setSelectedId(findSelectedClass)
    },[selectedClasses, classes])
    const [role] = useRole();
    if (!classes) {
        return null;
      }
  const {
    image,
    available_seats,
    description,
    instructor_name,
    name,
    number_of_students,
    price,
    rating,
    student_level,
    instructor_email,
    total_hours,
    total_review,
    status,
    _id
  } = classes;
  return (
    <div className={`w-full h-full duration-500 grid grid-cols-3 group gap-5  py-2 pr-2 md:pr-5 border-b ${isDarkMode ? 'border-gray-500' : ''} items-center relative `} title={available_seats == 0 ? 'Class seat not available' : role !== 'student' ? `You can't select class because you're ${role ? role : 'not Logged'}` : ''}>
      <div className="w-full h-full overflow-hidden flex items-center">
        <img className="w-full group-hover:scale-[1.1] origin-center duration-500" src={image} alt="" />
      </div>
      <div className={`col-start-2 col-end-4 w-full h-full duration-500 ${isDarkMode ? 'text-gray-200' : ''}`}>
        <h1 className={`text-base sm:text-lg font-bold font-kanit duration-500`}>{name}</h1>
        <div className="w-[200px] sm:w-fit h-[20px] sm:h-fit overflow-hidden"> 
        <p className={`text-xs sm:text-sm font-normal duration-500 ${children === 'manageClass' && 'hidden'}`}>{description.length > 99 ? description.slice(0,99)+' see more...' : description}</p>
        </div>
        <p className={`text-xs sm:text-sm font-medium`}>{instructor_name}</p>
        {children === 'manageClass' && <p className={`text-xs font-medium`}>{instructor_email}</p>}
        {
          children !== 'manageClass' && <div className="flex items-center gap-2">
          <p className={`text-xs sm:text-sm font-bold font-kanit text-orange-400`}>{rating}</p>
      <Rating
          emptySymbol={<FaRegStar className="text-orange-400" />}
          fullSymbol={<FaStar className="text-orange-400" />}
          fractions={2}
          initialRating={rating}
          readonly
        />
        <p className={`text-xs sm:text-sm font-medium font-kanit`}>({total_review})</p>
      </div>
        }
        <p className={`text-xs sm:text-sm font-medium`}>Available Seats: <span className={available_seats === 0 && 'text-primary'}>{available_seats}</span></p>
        <div className={`text-xs font-normal flex gap-1`}>
            <p>{total_hours} total hours,</p>
            {children !== 'manageClass' && <p>{student_level},</p>}
            {children !== 'manageClass' && <p className="hidden sm:inline-block">Students: {number_of_students}</p>}
        </div>
      </div>
      <div className={`absolute top-20 sm:top-1 text-sm sm:text-base right-0 font-bold duration-500 ${isDarkMode ? 'text-gray-200' : 'text-black'}`}>
        <p>${price}</p>
      </div>
      <div className={`absolute bottom-2 right-1 duration-500 ${children !== 'manageClass' && 'hidden group-hover:inline-block'}`}>
        {children !== 'manageClass' && <Link><button onClick={()=> selectClass(_id, refetch)} className={`text-sm font-bold text-white px-2 py-1 ${spin && 'w-14'} ${available_seats == 0 || role === 'instructor' || role === 'admin' || selectedId === classes._id ? 'bg-gray-400' : 'animate-bounce hover:bg-primary bg-blue-600'}`} disabled={available_seats == 0 || role === 'instructor' || role === 'admin' || selectedId === classes._id || available_seats === 0}>{selectedId === classes._id ? 'Selected' : spin ? <span className="loading loading-spinner loading-xs bg-white"></span> : 'Select'}</button></Link>}
        {/* show only manage classes route */}
        {
          children === 'manageClass' && <div className="w-full flex gap-1">
            <button onClick={()=> updateStatus(_id, 'denied')} className={`text-xs px-2 py-1 duration-300 text-white font-medium ${status === 'denied' || status === 'approved' ? 'bg-gray-400' : 'bg-primary'}`} disabled={status === 'denied' || status === 'approved'}>{status === 'denied' ? 'Denied' : 'Deny'}</button>
            <button onClick={()=> updateStatus(_id, 'approved')} className={`text-xs px-2 py-1 duration-300 text-white font-medium ${status === 'approved' || status === 'denied' ? 'bg-gray-400' : 'bg-blue-600 hover:bg-primary'}`} disabled={status === 'approved' || status === 'denied'}>{status === 'approved' ? 'Approved' : 'Approve'}</button>
            <button className="text-xs px-2 py-1 hover:bg-primary duration-300 bg-blue-600 text-white font-medium" onClick={()=>{window.my_modal_5.showModal(), setCurrentModalId(_id)}}>Feedback</button>
          </div>
        }
      </div>
    </div>
  );
};

export default ClassCard;
