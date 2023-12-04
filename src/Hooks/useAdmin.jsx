import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext);
    const {data: isAdmin} = useQuery({
        queryKey:['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get( `/users/admin/${user.email}`)
            // console.log('admin', res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin]
};

export default useAdmin;