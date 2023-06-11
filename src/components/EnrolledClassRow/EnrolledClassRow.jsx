import React from 'react';
import useClasses from '../../hooks/useClasses';
import { useState } from 'react';
import { useEffect } from 'react';

const EnrolledClassRow = ({index, id}) => {
    const [classes] = useClasses();
    const [enrolledClass, setEnrolledClass] = useState({});
    useEffect(() => {
        const findEnrolledClass = classes.find((eachClass) => eachClass._id === id);
        setEnrolledClass(findEnrolledClass);
      }, [classes, id]);
    return (
        <tr className="bg-base-200">
      <th>{index + 1}</th>
      <td>
        <img className="max-w-20 max-h-20" src={enrolledClass?.image} alt="" />
      </td>
      <td>{enrolledClass?.name}</td>
      <td>{enrolledClass?.instructor_name}</td>
      <td><i>Enrolled</i></td>
    </tr>
    );
};

export default EnrolledClassRow;