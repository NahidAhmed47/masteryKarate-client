import React from "react";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import useInstructorClasses from "../../../../hooks/useInstructorClasses";
import InstructorClass from "../../../../components/InstructorClass/InstructorClass";

const MyClasses = () => {
    const [instructorClasses] = useInstructorClasses()
    console.log(instructorClasses)
  return (
    <div className="w-full md:mt-10">
      <SectionHeader
        title="See Your Classes"
        subTitle="Share your talent"
      ></SectionHeader>
      <div>
        <div className="overflow-x-auto mt-5 md:mt-8">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Total Enrolled</th>
                <th>Status</th>
                <th>Feedback</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                instructorClasses?.map((eachClass, index)=> <InstructorClass key={eachClass._id} eachClass={eachClass} index={index}></InstructorClass>)
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
