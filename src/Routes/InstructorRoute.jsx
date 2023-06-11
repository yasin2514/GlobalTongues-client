import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Loading from "../Components/Loading/Loading";
import useInstructor from "../Hooks/useInstructor";


const InstructorRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor()

    if (loading || isInstructorLoading) {

        return <Loading></Loading>

    }
    if (user && isInstructor) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>

};

export default InstructorRoute;