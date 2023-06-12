import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['email'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/student/myClasses/${user?.email}`)
            return res.data;
        }
    })
    return [classes, refetch]
};

export default useCart;