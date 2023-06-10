import React from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import ClassCard from "../../../components/ClassCard/ClassCard";
import useApprovedClasses from "../../../hooks/useApprovedClasses";
import useInstructors from "../../../hooks/useInstructors";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Classes = () => {
  const [approvedClasses] = useApprovedClasses();
  const [instructors] = useInstructors();
  const {user, loading} = useAuth();
  const navigate = useNavigate()
  const selectClass = (selectedClass)=>{
    if(!user){
      Swal.fire({
        title: 'You must have with loggin',
        icon: 'info',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:'Login Now',
        cancelButtonText:
          'Later',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {replace: true});
        }
      })
      return
    }
    const {instructor_email, _id, available_seats } = selectedClass;
    console.log(instructor_email, available_seats, _id)
    const instructor = instructors?.find(instructor => instructor.email === instructor_email);
    console.log(instructor)
  }
//   TODO: Select Button. If the user is not logged in, then tell the user to log in before selecting the course. This button will be disabled if:
  return (
    <div className={`pt-14 md:pt-40`}>
      <PagesBanner
        img="https://i.ibb.co/mTZ3j0G/classes-Page-removebg-preview.png"
        title="All Mastery Classes"
      ></PagesBanner>
      <div className="max-container my-10 md:my-16">
        <SectionHeader
          title="Select Class & Gain Skills"
          subTitle="Classes"
        ></SectionHeader>
        <div className="grid md:grid-cols-2 gap-5 md:gap-8 mt-8">
          {approvedClasses?.map((eachClass) => <ClassCard key={eachClass._id} classes={eachClass} selectClass={selectClass}></ClassCard>)}
        </div>
      </div>
    </div>
  );
};

export default Classes;
