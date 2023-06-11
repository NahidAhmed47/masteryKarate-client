import React from "react";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";
import EnrolledClassRow from "../../../../components/EnrolledClassRow/EnrolledClassRow";

const EnrolledClasses = () => {
  const [enrolledClassesId, setEnrolledClassesId] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  useEffect(() => {
    axiosSecure
      .get(`/enrolled/${user?.email}`)
      .then((res) => setEnrolledClassesId(res.data));
  }, [axiosSecure, user]);
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
