import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useReviews = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext)
    const { refetch, data: myAllReviews = [] } = useQuery({
        queryKey: ['myAllReviews', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/reviews?email=${user.email}`);
            return res.data;
        }
    })

    return [myAllReviews, refetch]
};

export default useReviews;