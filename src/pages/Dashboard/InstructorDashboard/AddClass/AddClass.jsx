import React from 'react';
import { useForm } from "react-hook-form";
import SectionHeader from '../../../../components/SectionHeader/SectionHeader';
import useAuth from '../../../../hooks/useAuth';

const AddClass = () => {
    const {user, loading} = useAuth()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    if(loading){
        // TODO: loading added
        return <div> Loading...</div>
    }
    
      const onSubmit = (data) => {
        const classDetails = {
            ...data,
            status: 'pending',
            rating: 0,
            total_review: 0,
            number_of_students: 0
        }
        console.log(classDetails)
      };
    return (
        <div className='w-full md:mt-10'>
            <SectionHeader subTitle="Share your talent" title="Add Class"></SectionHeader>
             <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 p-4 bg-slate-100 rounded-md"
      >
        <div >
          <p className="text-base font-semibold mb-1">Class Name</p>
          <input
            {...register("name", { required: true })}
            className="w-full h-10 px-3 bg-white text-black outline-none rounded-md"
            placeholder="Class title"
            type="text"
          />
        </div>
        <div className="grid md:grid-cols-2 my-3 gap-10">
          <div>
            <p className="text-base font-semibold mb-1">Available Seats</p>
            <input
              {...register("available_seats", { required: true })}
              className="w-full h-10 px-3 bg-white text-black outline-none rounded-md"
              type="text"
              placeholder='Available Seats'
            />
          </div>
          <div>
            <p className="text-base font-semibold mb-1">Price</p>
            <input
              {...register("price", { required: true })}
              className="w-full h-10 px-3 bg-white text-black outline-none rounded-md"
              type="number"
              placeholder='Price'
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 my-3 gap-10">
          <div>
            <p className="text-base font-semibold mb-1">Student Levels (Optional)</p>
            <input
              {...register("student_level")}
              className="w-full h-10 px-3 bg-white text-black outline-none rounded-md"
              type="text"
              placeholder='Intermediate, beginner, all levels'
            />
          </div>
          <div>
            <p className="text-base font-semibold mb-1">Total Hours</p>
            <input
              {...register("total_hours", { required: true })}
              className="w-full h-10 px-3 bg-white text-black outline-none rounded-md"
              type="number"
              placeholder='10 hours...'
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 my-3 gap-10">
          <div>
            <p className="text-base font-semibold mb-1">Instructor Name</p>
            <input
              {...register("instructor_name")}
              className="w-full h-10 px-3 bg-white text-black outline-none rounded-md"
              type="text"
              defaultValue={user?.displayName}
              readOnly
            />
          </div>
          <div>
            <p className="text-base font-semibold mb-1">Email</p>
            <input
              {...register("instructor_email")}
              className="w-full h-10 px-3 bg-white text-black outline-none rounded-md"
              type="text"
              defaultValue={user?.email}
              readOnly
            />
          </div>
        </div>
        <div>
          <p className="text-base font-semibold mb-1">Description</p>
          <textarea
          {...register("description", { required: true })}
            cols="30"
            rows="6"
            className="w-full p-3 bg-white text-black outline-none rounded-md"
            placeholder="Write minimum 1 lines..."
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
        <p className="text-base font-semibold mb-1">Image</p>
          <input
          {...register("image")}
            type="file"
            className="file-input file-input-bordered w-full max-w-xs outline-none"
          />
        </div>
        <input type="submit" value="Add Items" className="my-btn py-2 mt-8 w-full"/>
      </form>
        </div>
    );
};

export default AddClass;