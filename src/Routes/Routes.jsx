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
import MyClasses from "../Pages/Dashboard/StudentDashboard/MyClasses";
import EnrolledClasses from "../Pages/Dashboard/StudentDashboard/EnrolledClasses";
import PaymentHistory from "../Pages/Dashboard/StudentDashboard/Payment/PaymentHistory";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers";
import ManageClasses from "../Pages/Dashboard/AdminDashboard/ManageClasses";
import InstructorClasses from "../Pages/Dashboard/InstructorDashboard/InstructorClasses";
import AddClasses from "../Pages/Dashboard/InstructorDashboard/AddClasses";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
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
                path: 'student',
                element: <PrivateRoute><StudentDashboard></StudentDashboard></PrivateRoute>
            },
            {
                path: 'myClassStudent',
                element: <PrivateRoute><MyClasses></MyClasses></PrivateRoute>
            },
            {
                path: 'enrolledClass',
                element: <PrivateRoute><EnrolledClasses></EnrolledClasses></PrivateRoute>
            },
            {
                path: 'paymentHistory',
                element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
            },
            {
                path: 'admin',
                element: <PrivateRoute><AdminRoute><AdminDashboard></AdminDashboard></AdminRoute></PrivateRoute>
            },
            {
                path: 'manageUsers',
                element: <PrivateRoute><AdminRoute><ManageUsers></ManageUsers></AdminRoute> </PrivateRoute>
            },
            {
                path: 'manageClasses',
                element: <PrivateRoute><AdminRoute><ManageClasses></ManageClasses></AdminRoute></PrivateRoute>
            },
            {
                path: 'instructor',
                element: <PrivateRoute><InstructorRoute><InstructorDashboard></InstructorDashboard></InstructorRoute></PrivateRoute>
            },
            {
                path: 'instructorClasses',
                element: <PrivateRoute><InstructorRoute><InstructorClasses></InstructorClasses></InstructorRoute></PrivateRoute>
            },
            {
                path: 'addClasses',
                element: <PrivateRoute><InstructorRoute><AddClasses></AddClasses></InstructorRoute></PrivateRoute>
            },
            {
                path: '',
                element: <PrivateRoute></PrivateRoute>
            },

        ],
        errorElement: <Error></Error>
    },


])
export default router;