import React from "react";
import useAuth from "../hooks/useAuth";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import { FaBookOpen, FaPlus, FaHome, FaPowerOff, FaReadme, FaWallet, FaEdit, FaUserFriends } from "react-icons/fa";
const Dashboard = () => {
  const { user, logOut } = useAuth();
  let [role] = useRole();
  const navigate = useNavigate();
  const handleLogOut = ()=>{
    logOut().then(()=>{
      navigate('/', {replace: true});
    })
  }
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
                    ? " font-kanit font-bold dashboard-btn-active "
                    : "text-black font-kanit font-bold dashboard-btn"
                }
              >
                <FaBookOpen className="w-4 h-4"></FaBookOpen>
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
                <FaPlus className="w-4 h-4"></FaPlus>
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
              <FaBookOpen className="w-4 h-4"></FaBookOpen>
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
              <FaReadme className="w-4 h-4"></FaReadme>
              Enrolled Classes
            </NavLink>
            <NavLink
              to="/dashboard/payment/history"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-kanit font-bold dashboard-btn-active "
                  : "text-black font-kanit font-bold dashboard-btn"
              }
            >
              <FaWallet className="w-4 h-4"></FaWallet>
              Payment History
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
              <FaEdit className="w-4 h-4"></FaEdit>
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
              <FaUserFriends className="w-4 h-4"></FaUserFriends>
              Manage Users
            </NavLink>
                </>
            }
          </div>
          <div className="mt-5 md:mt-10 border-t  w-full h-full flex flex-col items-center gap-4 px-3 md:px-5">
            <Link to='/' className="w-full mt-5 "><button className="dashboard-btn text-black font-kanit font-bold flex justify-center items-center text-sm gap-2 hover:bg-primary duration-200 hover:text-white"><FaHome className="w-4 h-4"></FaHome> Home</button></Link>
            <button onClick={handleLogOut} className="dashboard-btn text-black font-kanit font-bold flex justify-center items-center text-sm gap-2 hover:bg-primary duration-200 hover:text-white"><FaPowerOff className="w-4 h-4"></FaPowerOff> LogOut</button>
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
