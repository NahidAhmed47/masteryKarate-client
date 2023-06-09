import React from "react";
import useClasses from "../../../../hooks/useClasses";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import ClassCard from "../../../../components/ClassCard/ClassCard";

const ManageClasses = () => {
  const [classes, refetch] = useClasses();
  const updateStatus = (id, text) => {
    fetch(`http://localhost:5000/allclass/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${text} Done!`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
  };
  return (
    <div className="w-full md:mt-10">
      <SectionHeader
        title="Manage Classes"
        subTitle="See all classes"
      ></SectionHeader>
      <div className="grid md:grid-cols-2 gap-5 lg:gap-7 mt-7">
        {classes?.map((eachClass) => (
          <ClassCard
            key={eachClass._id}
            classes={eachClass}
            updateStatus={updateStatus}
          >
            manageClass
          </ClassCard>
        ))}
      </div>
      {/* modal part */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Write your comment here!</h3>
          <div>
          <textarea
            cols="30"
            rows="6"
            className="w-full p-3 bg-white text-black outline-none rounded-md border mt-4"
            placeholder="Start typing..."
          ></textarea>
        </div>
          <div className="modal-action flex justify-center">
            <button className="text-base px-3 py-1 duration-300 text-white font-medium bg-blue-600 hover:bg-primary">Submit</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ManageClasses;
