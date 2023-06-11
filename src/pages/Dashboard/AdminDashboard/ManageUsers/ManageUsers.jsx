import React, { useEffect, useState } from 'react';
import SectionHeader from '../../../../components/SectionHeader/SectionHeader';
import UserRow from '../../../../components/UserRow/UserRow';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [control, setControl] = useState(false);
    const [axiosSecure] = useAxiosSecure();
    useEffect(()=>{
        axiosSecure.get('/users')
        .then(res => setUsers(res.data))
    },[control, axiosSecure])
    const updateUser = (id, roleText) => {
    axiosSecure.put(`/users/${id}`, {roleText})
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Updated",
            showConfirmButton: false,
            timer: 1500,
          });
          setControl(!control)
        }
      });
    }
    const deleteUser = (id)=>{
      axiosSecure.delete(`/users/${id}`)
      .then(res => {
        if(res.data.deletedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Deleted User!",
            showConfirmButton: false,
            timer: 1500,
          });
          setControl(!control)
        }
      })
    }
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
                <th>Image</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users?.map((user, index) => <UserRow key={index} index={index} user={user} updateUser={updateUser} deleteUser={deleteUser}></UserRow>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default ManageUsers;