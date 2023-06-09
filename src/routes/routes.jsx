import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/DefaultPages/Home/Home/Home";
import Classes from "../pages/DefaultPages/Classes/Classes";
import Instructors from "../pages/DefaultPages/Instructors/Instructors";
import Login from "../pages/DefaultPages/AuthVerify/Login";
import Registration from "../pages/DefaultPages/AuthVerify/Registration";
import About from "../pages/DefaultPages/About/About";
import Contract from "../pages/DefaultPages/Contract/Contract";
import Dashboard from "../layouts/Dashboard";
import AddClass from "../pages/Dashboard/InstructorDashboard/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/InstructorDashboard/MyClasses/MyClasses";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'contract',
                element: <Contract></Contract>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            }
        ]
    },
    {
       path: 'dashboard',
       element: <Dashboard></Dashboard>,
       children: [
        {
            path: 'add-class',
            element: <AddClass></AddClass>
        },
        {
            path: 'my-classes',
            element: <MyClasses></MyClasses>
        }
       ]
    }
])

export default router;