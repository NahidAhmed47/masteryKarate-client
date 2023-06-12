import React from "react";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import useSelectedClass from "../../../../hooks/useSelectedClass";
import SelectedClassRow from "../../../../components/SelectedClassRow/SelectedClassRow";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loading from "../../../../components/Loading/Loading";
import setTitle from "../../../../utls/setTitle";

const SelectedClasses = () => {
  const [selectedClasses, refetch, isLoading] = useSelectedClass();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  setTitle('Selected classes')
  if (isLoading) {
    return <Loading></Loading>;
  }
  const deleteSelectedClass = (id) => {
    const deleteSelectedClass = selectedClasses.filter(
      (eachClass) => eachClass !== id
    );
    axiosSecure.put(`/selected-classes/${user?.email}`, deleteSelectedClass)
      .then((res) => {
        if (res?.data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Selected class delete successfully",
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
        title="See classes you added yet"
        subTitle="Selected Classes"
      ></SectionHeader>
      <div>
        {
          selectedClasses.length > 0 ? <div className="overflow-x-auto mt-5 md:mt-8">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {selectedClasses?.map((selectedId, index) => (
                <SelectedClassRow
                  key={index}
                  index={index}
                  selectedId={selectedId}
                  deleteSelectedClass={deleteSelectedClass}
                ></SelectedClassRow>
              ))}
            </tbody>
          </table>
        </div> : <div className="text-primary text-center mt-20 lg:mt-28"><i>No classes have been selected yet!</i></div>
        }
      </div>
    </div>
  );
};

export default SelectedClasses;
