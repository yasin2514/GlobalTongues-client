import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Loading from "../Components/Loading/Loading";
import useStudent from "../Hooks/useStudent";


const StudentRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    const [isStudent, isStudentLoading] = useStudent();

    if (loading || isStudentLoading) {

        return <Loading></Loading>

    }
    if (user && isStudent) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>

};

export default StudentRoute;