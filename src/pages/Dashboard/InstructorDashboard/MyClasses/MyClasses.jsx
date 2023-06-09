import React, { useState } from "react";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import useInstructorClasses from "../../../../hooks/useInstructorClasses";
import InstructorClass from "../../../../components/InstructorClass/InstructorClass";

// TODO: see feedback column open in this modal and show feedback result if feedback exists.

const MyClasses = () => {
  const [instructorClasses] = useInstructorClasses();
  const [feedback, setFeedback] = useState("");
  return (
    <div className="w-full md:mt-10">
      <SectionHeader
        title="See Your Classes"
        subTitle="Share your talent"
      ></SectionHeader>
      <div>
        <div className="overflow-x-auto mt-5 md:mt-8">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Total Enrolled</th>
                <th>Status</th>
                <th>Feedback</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {instructorClasses?.map((eachClass, index) => (
                <InstructorClass
                  key={eachClass._id}
                  eachClass={eachClass}
                  index={index}
                  setFeedback={setFeedback}
                ></InstructorClass>
              ))}
            </tbody>
          </table>
          {/* feedback modal here */}
          <dialog id="my_modal_2" className="modal">
            <form method="dialog" className="modal-box text-center">
              <h3 className="font-bold text-lg">Feedback provided from Admin!</h3>
              {
                feedback.length > 0 ? <p className="py-4 ">{feedback}</p> : <i>No feedback provided so far!</i> 
              }
            </form>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
