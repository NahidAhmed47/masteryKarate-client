import React from "react";
import useAuth from "../hooks/useAuth";
import { Link, NavLink, Outlet } from "react-router-dom";
import useRole from "../hooks/useRole";

const Dashboard = () => {
  const { user } = useAuth();
  let [role] = useRole();
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
          <div className="px-3 md:px-5 min-h-[20%] w-full lg:mt-7 flex flex-col items-center gap-4">
            {/* instructor routes */}
            {
                role === 'instructor' && <>
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
                </>
            }
            {/* students routes */}
            {
                role === "student" && <>
                <NavLink
              to="/dashboard/selected-classes"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-kanit font-bold dashboard-btn-active "
                  : "text-black font-kanit font-bold dashboard-btn"
              }
            >
              Selected Classes
            </NavLink>
            <NavLink
              to="/dashboard/enrolled-classes"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-kanit font-bold dashboard-btn-active "
                  : "text-black font-kanit font-bold dashboard-btn"
              }
            >
              Enrolled Classes
            </NavLink>
                </>
            }
            {/* admin routes */}
            {
                role === "admin" && <>
                <NavLink
              to="/dashboard/manage-classes"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-kanit font-bold dashboard-btn-active "
                  : "text-black font-kanit font-bold dashboard-btn"
              }
            >
              Manage Classes
            </NavLink>
            <NavLink
              to="/dashboard/manage-users"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-kanit font-bold dashboard-btn-active "
                  : "text-black font-kanit font-bold dashboard-btn"
              }
            >
              Manage Classes
            </NavLink>
                </>
            }
          </div>
          <div className="mt-5 md:mt-10 border-t  w-full h-full flex flex-col items-center gap-4 px-3 md:px-5">
            <Link to='/' className="w-full mt-5"><button className="dashboard-btn text-black font-kanit font-bold">Home</button></Link>
          </div>
        </div>
        <div className="w-full col-start-2 col-end-6 px-5 lg:px-10">
            <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
