import React, { useRef, useState } from "react";
import useClasses from "../../../../hooks/useClasses";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import ClassCard from "../../../../components/ClassCard/ClassCard";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loading from "../../../../components/Loading/Loading";
import setTitle from "../../../../utls/setTitle";

const ManageClasses = () => {
  const [classes, refetch, isLoading] = useClasses();
  const [currentModalId, setCurrentModalId] = useState("");
  const feedbackRef = useRef();
  const [axiosSecure] = useAxiosSecure();
  setTitle('Manage Classes');
  if(isLoading){
    return <Loading></Loading>
  }
  const updateStatus = (id, text) => {
    axiosSecure.patch(`/allclass/${id}`, {text})
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${text === 'denied' || text === 'approved' ? {text} +'done!' : 'Thanks for your feedback!'}`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
  };
  const sendFeedback = () => {
    updateStatus(currentModalId, feedbackRef.current.value)
  };
  return (
    <div className="w-full md:mt-10">
      <SectionHeader
        title="Manage Classes"
        subTitle="See all classes"
      ></SectionHeader>
      {
        classes.length > 0 ? <div className="grid lg:grid-cols-2 gap-5 lg:gap-7 mt-7">
        {classes?.map((eachClass) => (
          <ClassCard
            key={eachClass._id}
            classes={eachClass}
            updateStatus={updateStatus}
            setCurrentModalId={setCurrentModalId}
          >
            manageClass
          </ClassCard>
        ))}
      </div> : <div className="text-primary text-center mt-20 lg:mt-28"><i>No classes have been in a store!</i></div>
      }
      {/* modal part */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Write your comment here!</h3>
          <div>
          <textarea
          ref={feedbackRef}
            cols="30"
            rows="6"
            className="w-full p-3 bg-white text-black outline-none rounded-md border mt-4"
            placeholder="Start typing..."
            name="comment"
          ></textarea>
        </div>
          <div className="modal-action ">
            <button onClick={sendFeedback} className="text-base px-3 py-1 duration-300 text-white font-medium bg-blue-600 hover:bg-primary">Submit</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ManageClasses;
