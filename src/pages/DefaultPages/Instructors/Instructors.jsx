import React from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import useInstructors from "../../../hooks/useInstructors";
import InstructorCard from "../../../components/InstructorCard/InstructorCard";

const Instructors = () => {
  const [instructors] = useInstructors();
  return (
    <div className={`pt-14 md:pt-40`}>
      <PagesBanner
        img="https://i.ibb.co/TtM6rzR/instructor-pages-removebg-preview.png"
        title="Choose Your Best Trainer"
      ></PagesBanner>
      <div className="max-container my-10 md:my-16">
        <SectionHeader
          title="World Class Trainers"
          subTitle="Trainers"
        ></SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 lg:gap-10 mt-4 md:mt-10">
            {
                instructors?.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
            }
        </div>
      </div>
    </div>
  );
};

export default Instructors;
