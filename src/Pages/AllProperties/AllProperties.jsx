import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllProperties = () => {
  const axiosSecure = useAxiosSecure()
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    axiosSecure
      .get("/properties")
      .then((res) => setProperties(res.data));
  }, [axiosSecure]);
  console.log(properties);
  return (
    <div>
      <Helmet>
        <title>All Properties | Grandeur Home</title>
      </Helmet>
      <h2 className="text-5xl"> All Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((item) => (
          <div key={item._id}>
            <img className="w-full h-60" src={item.property_image} alt="" />
            <h2 className="text-3xl font-semibold">{item.property_title}</h2>
            <p>Location: {item.property_location}</p>
            <p>Price Range: {item.price_range}</p>
            <div className="my-5">
              <hr />
            </div>
            <div className="flex items-center justify-around gap-2">
              <div className="flex items-center justify-center gap-3">
                <img
                  className="h-12 w-12 rounded-full"
                  src={item.agent_image}
                  alt=""
                />
                <div>
                  <h2 className="text-xl">{item.agent_name}</h2>
                  <p className="text-green-600">{item.verification_status}</p>
                </div>
              </div>
              <Link to={`/details/${item._id}`}>
                <button className="btn btn-primary">Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
