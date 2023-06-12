import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";


const useEnrolledClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user, loading } = useContext(AuthContext)
    const { data: classes = [], refetch } = useQuery({

        queryKey: ["enrolledClass", user?.email],
        enabled: !loading,

        queryFn: async () => {
            const res = await axiosSecure.get(`/student/enrolled/${user?.email}`);
            return res.data;
        }
    })
    return [classes, refetch]
};

export default useEnrolledClass;