import React, { useEffect, useState } from "react";
import useClasses from "../../hooks/useClasses";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SelectedClassRow = ({ selectedId, index, deleteSelectedClass }) => {
  const [classes] = useClasses();
  const [selectedClass, setSelectedClass] = useState({});
  useEffect(() => {
    const findClass = classes.find((eachClass) => eachClass._id === selectedId);
    setSelectedClass(findClass);
  }, [classes, selectedId]);
  return (
    <tr className="bg-base-200">
      <th>{index + 1}</th>
      <td>
        <img className="max-w-24 max-h-24" src={selectedClass?.image} alt="" />
      </td>
      <td>{selectedClass?.name}</td>
      <td>${selectedClass?.price}</td>
      <td>
        <div className="flex justify-center gap-5 items-center duration-200">
          <Link to={`/dashboard/payment/${selectedClass?._id}`}>
          <button className="text-sm px-3 py-1 text-white font-medium bg-blue-600 hover:bg-primary">
            Pay
          </button>
          </Link>
          <button onClick={()=> deleteSelectedClass(selectedId)}>
            <FaTrashAlt className="w-5 h-5 text-primary"></FaTrashAlt>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SelectedClassRow;
