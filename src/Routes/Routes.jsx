
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login & Register/Login/Login";
import Registration from "../Pages/Login & Register/Register/Registration";
import Terms from "../Pages/Login & Register/Terms/Terms";
import Error from "../Pages/Error/Error";
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
            }
        ],
        errorElement:<Error></Error>
    },
])
export default router;