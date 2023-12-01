import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useProperties = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext)
    const { refetch, data: properties = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/properties`);
            return res.data;
        }
    })

    return [properties, refetch]
};

export default useProperties;