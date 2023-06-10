
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login & Register/Login/Login";
import Registration from "../Pages/Login & Register/Register/Registration";
import Terms from "../Pages/Login & Register/Terms/Terms";
import Error from "../Pages/Error/Error";
import Instructors from "../Pages/Instructors/Instructors";
import PrivateRoute from "./PrivateRoute";
import Classes from "../Pages/Classes/Classes";
import DashboardLayout from "../Layout/DashboardLayout";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import InstructorDashboard from "../Pages/Dashboard/InstructorDashboard/InstructorDashboard";
import StudentDashboard from "../Pages/Dashboard/StudentDashboard/StudentDashboard";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            },
            {
                path: '/allInstructor',
                element: <Instructors></Instructors>
            },
            {
                path: '/allClasses',
                element: <Classes></Classes>
            },
        ],
        errorElement: <Error></Error>

    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [

            {
                path: 'admin',
                element: <PrivateRoute><AdminDashboard></AdminDashboard></PrivateRoute>
            },
            {
                path: 'instructor',
                element: <PrivateRoute><InstructorDashboard></InstructorDashboard></PrivateRoute>
            },
            {
                path: 'student',
                element: <PrivateRoute><StudentDashboard></StudentDashboard></PrivateRoute>
            },

        ],
        errorElement: <Error></Error>
    },


])
export default router;