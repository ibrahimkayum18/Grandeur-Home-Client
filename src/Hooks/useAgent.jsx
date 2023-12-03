import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAgent = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext);
    const {data: isAgent} = useQuery({
        queryKey:['isAgent', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get( `/users/admin/${user.email}`)
            return res.data?.agent;
        }
    })
    return [isAgent]
};

export default useAgent;