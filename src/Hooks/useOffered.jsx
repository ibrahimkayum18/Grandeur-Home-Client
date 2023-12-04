import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useOffered = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const {data: offeredProperties = [], refetch} = useQuery({
      queryKey:['property-bought'],
      queryFn: async() => {
        const res = await axiosSecure.get(`/offered?buyer_email=${user.email}`)
        return res.data
      }
    })
    return [offeredProperties, refetch]
};

export default useOffered;