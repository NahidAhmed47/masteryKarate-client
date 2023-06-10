import React from "react";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import useSelectedClass from "../../../../hooks/useSelectedClass";
import SelectedClassRow from "../../../../components/SelectedClassRow/SelectedClassRow";

const SelectedClasses = () => {
  const [selectedClasses] = useSelectedClass();
  console.log(selectedClasses)
  if(!selectedClasses){
    // add loading
    return <div>Loading...</div>
  }
  const deleteSelectedClass = (id) =>{
    console.log(id)
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
