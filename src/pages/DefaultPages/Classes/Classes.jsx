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
  const {user} = useAuth();
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
    const instructor = instructors?.find(instructor => instructor.email === instructor_email);
    fetch(`http://localhost:5000/select-class?inst=${instructor_email}&user=${user?.email}&classid=${_id}`,{
      method: 'PUT',
      headers:{
        'content-type': 'application/json',
      }
    }).then(res => res.json())
    .then(data => {
      if(data.updateInst.modifiedCount > 0 && data.updateStudent.modifiedCount > 0 && data.updateClass.modifiedCount > 0) {
        Swal.fire({
          title: 'Class seleted successfully',
          icon: 'success',
          showDenyButton: true,
          showCancelButton: false,
          confirmButtonText: 'Go to My classes page',
          denyButtonText: `No, later`,
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/dashboard/my-classes', {replace: true});
          } 
        })
      }
    })
  }
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
