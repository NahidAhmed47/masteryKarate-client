import React from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import useInstructors from "../../../hooks/useInstructors";
import InstructorCard from "../../../components/InstructorCard/InstructorCard";
import Loading from "../../../components/Loading/Loading";
import setTitle from "../../../utls/setTitle";

const Instructors = () => {
  const [instructors] = useInstructors();
  setTitle('Instructors')
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
        {instructors.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 lg:gap-10 mt-4 md:mt-10">
            {instructors?.map((instructor) => (
              <InstructorCard
                key={instructor._id}
                instructor={instructor}
              ></InstructorCard>
            ))}
          </div>
        ) : (
          <Loading></Loading>
        )}
      </div>
    </div>
  );
};

export default Instructors;
