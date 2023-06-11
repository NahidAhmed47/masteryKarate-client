import React from "react";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import EnrolledClassRow from "../../../../components/EnrolledClassRow/EnrolledClassRow";
import useEnrolledClasses from "../../../../hooks/useEnrolledClasses";

const EnrolledClasses = () => {
  const [enrolledClassesId] = useEnrolledClasses();
  return (
    <div className="w-full md:mt-10">
      <SectionHeader
        title="See classes you enrolled so far"
        subTitle="Enrolled Classes"
      ></SectionHeader>
      <div>
        <div className="overflow-x-auto mt-5 md:mt-8">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Image</th>
                <th>Name</th>
                <th>Instructor</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {enrolledClassesId?.map((id, index) => (
                <EnrolledClassRow key={index} index={index} id={id}></EnrolledClassRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EnrolledClasses;
