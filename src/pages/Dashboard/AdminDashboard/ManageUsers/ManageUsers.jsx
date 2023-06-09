import React, { useEffect, useState } from 'react';
import SectionHeader from '../../../../components/SectionHeader/SectionHeader';
import UserRow from '../../../../components/UserRow/UserRow';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    console.log(users)
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
                users?.map((user, index) => <UserRow key={index} index={index} user={user}></UserRow>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default ManageUsers;