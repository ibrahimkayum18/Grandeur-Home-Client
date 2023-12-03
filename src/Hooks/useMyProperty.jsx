import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useMyProperty = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext)
    const { data: myAllProperties = [],refetch } = useQuery({
        queryKey: ['myAllProperties', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/properties?agent_email=${user.email}`);
            return res.data;
        }
    })

    return [myAllProperties, refetch]
};

export default useMyProperty;