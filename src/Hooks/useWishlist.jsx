import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useWishlist = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext)
    const { refetch, data: myWishes = [] } = useQuery({
        queryKey: ['myWishes', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/reviews?email=${user.email}`);
            return res.data;
        }
    })

    return [myWishes, refetch]
};

export default useWishlist;