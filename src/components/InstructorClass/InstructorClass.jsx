import React from 'react';

const InstructorClass = ({index, eachClass}) => {
    const {name, number_of_students, status} = eachClass;
    return (
        <tr className="bg-base-200">
                <th>{index + 1}</th>
                <td>{name}</td>
                <td className="pl-8">{number_of_students}</td>
                <td className="text-yellow-500">{status}</td>
                <td>See Feedback</td>
                <td><button className="my-btn hover:text-white">Update</button></td>
              </tr>
    );
};

export default InstructorClass;