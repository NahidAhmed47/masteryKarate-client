import React from "react";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import useSelectedClass from "../../../../hooks/useSelectedClass";
import SelectedClassRow from "../../../../components/SelectedClassRow/SelectedClassRow";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";

const SelectedClasses = () => {
  const [selectedClasses, refetch] = useSelectedClass();
   const {user} = useAuth();
  if(!selectedClasses){
    // TODO: add loading
    return <div>Loading...</div>
  }
  const deleteSelectedClass = (id) =>{
    const deleteSelectedClass = selectedClasses.filter(eachClass => eachClass !== id)
    fetch(`http://localhost:5000/selected-classes/${user?.email}`,{
      method: 'PUT', 
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(deleteSelectedClass),
    }).then(res => res.json()).then(data => {
      if(data.modifiedCount > 0) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Selected class delete successfully',
          showConfirmButton: false,
          timer: 1500
        })
        refetch()
      }
    })
  }
  return (
    <div className="w-full md:mt-10">
      <SectionHeader
        title="See classes you added so far"
        subTitle="Selected Classes"
      ></SectionHeader>
      <div>
        <div className="overflow-x-auto mt-5 md:mt-8">
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
        </div>
      </div>
    </div>
  );
};

export default SelectedClasses;
