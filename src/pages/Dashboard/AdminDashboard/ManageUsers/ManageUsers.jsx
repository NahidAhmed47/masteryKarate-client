import React, { useEffect, useState } from 'react';
import SectionHeader from '../../../../components/SectionHeader/SectionHeader';
import UserRow from '../../../../components/UserRow/UserRow';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [control, setControl] = useState(false);
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[control])
    const updateUser = (id, roleText) => {
      fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roleText }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.modifiedCount > 0) {
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
      fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.deletedCount > 0) {
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