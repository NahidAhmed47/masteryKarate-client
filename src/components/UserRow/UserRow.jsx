import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const UserRow = ({ user, index, updateUser, deleteUser }) => {
  const {image, name, email, role, _id } = user;
  return (
    <tr className="bg-base-200">
      <th>{index + 1}</th>
      <td><img className="w-14 h-14 rounded-full" src={image} alt="" /></td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td>
        <div className="flex justify-around">
          <button onClick={()=> updateUser(_id, 'instructor')} className={`text-sm px-2 py-1 text-white font-medium  ${role === 'instructor' || role === 'admin' ? 'bg-slate-400' : 'bg-blue-600 hover:text-primary'}`} disabled={role === 'instructor' || role === 'admin'}>
            Instructor
          </button>
          <button onClick={()=> updateUser(_id, 'admin')} className={`text-sm px-2 py-1 text-white font-medium  ${ role === 'admin' ? 'bg-slate-400' : 'bg-blue-600 hover:text-primary'}`} disabled={role === 'admin'}>
            Admin
          </button>
          <button onClick={()=> deleteUser(_id)}>
            <FaTrashAlt className="w-5 h-5 text-primary"></FaTrashAlt>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
