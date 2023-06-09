import React from 'react';
import SectionHeader from '../../../../components/SectionHeader/SectionHeader';

const ManageUsers = () => {
    return (
        <div className="w-full md:mt-10">
      <SectionHeader
        title="See All Users"
        subTitle="Contributors"
      ></SectionHeader>
      <div>
        <div className="overflow-x-auto mt-5 md:mt-8">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="bg-base-200">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>nahidahmedsd47@gmail.com</td>
                <td>Student</td>
                <td>Instructor, Admin</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default ManageUsers;