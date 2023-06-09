import React from 'react';

const InstructorClass = ({index, eachClass, setFeedback}) => {
    const {name, number_of_students, status, feedback} = eachClass;
    return (
        <tr className="bg-base-200">
                <th>{index + 1}</th>
                <td>{name}</td>
                <td className="pl-8">{number_of_students}</td>
                <td className={`text-sm font-semibold uppercase ${status === 'pending' && 'text-yellow-500'} ${status === 'denied' && 'text-red-600'} ${status === 'approved' && 'text-blue-600'}`}>{status}</td>
                <td ><button onClick={() => {window.my_modal_2.showModal(), setFeedback(feedback)}} className='font-medium hover:underline'>See feedback</button></td>
                <td><button className="text-sm px-3 py-1 text-white font-medium bg-blue-600 hover:bg-primary duration-300">Update</button></td>
              </tr>
    );
};

export default InstructorClass;