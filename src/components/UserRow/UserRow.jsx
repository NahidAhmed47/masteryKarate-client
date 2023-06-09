import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const UserRow = ({ user, index }) => {
  const { name, email, role } = user;
  return (
    <tr className="bg-base-200">
      <th>{index}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td>
        <div className="flex justify-around">
          <button className="text-sm px-2 py-1 bg-blue-600 text-white font-medium">
            Instructor
          </button>
          <button className="text-sm px-2 py-1 bg-blue-600 text-white font-medium">
            Admin
          </button>
          <button>
            <FaTrashAlt className="w-5 h-5 text-primary"></FaTrashAlt>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
