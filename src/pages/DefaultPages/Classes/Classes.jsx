import React from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import useClasses from "../../../hooks/useClasses";
import ClassCard from "../../../components/ClassCard/ClassCard";

const Classes = () => {
  const [classes] = useClasses();
//   TODO: Select Button. If the user is not logged in, then tell the user to log in before selecting the course. This button will be disabled if:
// Available seats are 0
// Logged in as admin/instructor
// The class card background will be red if the available seats are 0.
  return (
    <div className={`pt-14 md:pt-40`}>
      <PagesBanner
        img="https://i.ibb.co/mTZ3j0G/classes-Page-removebg-preview.png"
        title="All Mastery Classes"
      ></PagesBanner>
      <div className="max-container my-10 md:my-16">
        <SectionHeader
          title="Select Class & enjoy"
          subTitle="Classes"
        ></SectionHeader>
        <div className="grid md:grid-cols-2 gap-5 md:gap-8 mt-8">
          {classes?.map((eachClass) => <ClassCard key={eachClass._id} classes={eachClass}></ClassCard>)}
        </div>
      </div>
    </div>
  );
};

export default Classes;
