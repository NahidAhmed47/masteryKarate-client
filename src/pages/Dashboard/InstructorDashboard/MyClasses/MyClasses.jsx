import React from "react";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";

const MyClasses = () => {
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
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="bg-base-200">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td className="pl-8">0</td>
                <td className="text-yellow-500">pending</td>
                <td>See Feedback</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
