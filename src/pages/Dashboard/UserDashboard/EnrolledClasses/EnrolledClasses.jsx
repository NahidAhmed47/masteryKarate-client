import React from "react";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import EnrolledClassRow from "../../../../components/EnrolledClassRow/EnrolledClassRow";
import useEnrolledClasses from "../../../../hooks/useEnrolledClasses";
import Loading from "../../../../components/Loading/Loading";
import setTitle from "../../../../utls/setTitle";

const EnrolledClasses = () => {
  const [enrolledClassesId, , isLoading] = useEnrolledClasses();
  setTitle('Enrolled classes')
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div className="w-full md:mt-10">
      <SectionHeader
        title="See classes you enrolled yet"
        subTitle="Enrolled Classes"
      ></SectionHeader>
      <div>
        {
          enrolledClassesId.length > 0 ? <div className="overflow-x-auto mt-5 md:mt-8">
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
        </div> : <div className="text-primary text-center mt-20 lg:mt-28"><i>No classes have been enrolled yet!</i></div>
        }
      </div>
    </div>
  );
};

export default EnrolledClasses;
