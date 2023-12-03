import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../../Provider/AuthProvider";

const PropertyBought = () => {
  const [offeredProperties, setOfferedProperties] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axiosSecure.get(`/offered/buyer_email/${user.email}`).then((res) => {
      setOfferedProperties(res.data);
      console.log(res.data);
    });
  }, [axiosSecure, user.email]);
  return (
    <div>
      <h2 className="mt-5 text-3xl font-bold text-center">Total Property Bought</h2>
      <div className="divider"></div>
    </div>
  );
};

export default PropertyBought;
