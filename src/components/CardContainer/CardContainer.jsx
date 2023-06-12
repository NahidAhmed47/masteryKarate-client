import React, { useEffect } from "react";
import ClassCard from "../ClassCard/ClassCard";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CardContainer = ({ classesData }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();
  const [spin, setSpin] = useState(false);
  useEffect(()=>{
    AOS.init();
  },[])
  const selectClass = (selectedClassId, refetch) => {
    setSpin(true);
    if (!user) {
      setSpin(false);
      Swal.fire({
        title: "You must have with loggin",
        icon: "info",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: "Login Now",
        cancelButtonText: "Later",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { replace: true });
        }
      });
      return;
    }
    axiosSecure
      .put(`/select-class?user=${user?.email}&classid=${selectedClassId}`)
      .then((res) => {
        if (res.data.updateStudent.modifiedCount > 0) {
          setSpin(false);
          Swal.fire({
            title: "Class seleted successfully",
            icon: "success",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Go to My classes page",
            denyButtonText: `No, later`,
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/dashboard/my-classes", { replace: true });
            }
          });
          refetch();
        }
      });
  };
  return (
    <>
      {classesData.length > 0 ? (
        <div data-aos="zoom-in-up" className="grid lg:grid-cols-2 gap-5 md:gap-8 mt-8 ">
          {classesData?.map((eachClass) => (
            <ClassCard
              key={eachClass._id}
              classes={eachClass}
              selectClass={selectClass}
              spin={spin}
            ></ClassCard>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default CardContainer;
