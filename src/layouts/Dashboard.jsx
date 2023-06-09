import React from "react";
import useAuth from "../hooks/useAuth";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className={`max-container border min-h-screen grid grid-cols-5`}>
        <div className={`bg-gray-300`}>
          <div>
            <img
              className="w-[150px] h-[150px] rounded-full mx-auto"
              src={user?.photoURL}
              alt=""
            />
            <h1 className="text-lg font-extrabold text-center font-kanit">
              {user?.displayName}
            </h1>
            <p className="text-xs font-bold font-kanit text-center">
              {user?.email}
            </p>
          </div>
          <div className="px-3 md:px-5 h-full w-full lg:mt-7 flex flex-col items-center gap-4">
            <NavLink
              to="/dashboard/my-classes"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-kanit font-bold dashboard-btn-active "
                  : "text-black font-kanit font-bold dashboard-btn"
              }
            >
              My Classes
            </NavLink>
            <NavLink
              to="/dashboard/add-class"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-kanit font-bold dashboard-btn-active "
                  : "text-black font-kanit font-bold dashboard-btn"
              }
            >
              Add Class
            </NavLink>
          </div>
        </div>
        <div>
            <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
