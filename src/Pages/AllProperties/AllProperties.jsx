import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useProperties from "../../Hooks/useProperties";
import Footer from "../../Components/Footer";

const AllProperties = () => {
  const [properties, refetch] = useProperties();
  const [verifiedProperties, setVerifiedProperties] = useState([]);
  useEffect(() => {
    if (properties.length > 0) {
      const find = properties.filter(
        (item) => item.verification === "verified"
      );
      setVerifiedProperties(find);
    }
  }, [properties]);
  return (
    <div className="bg-slate-300">
      <Helmet>
        <title>All Properties | Grandeur Home</title>
      </Helmet>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4" data-aos="fade-up">
      <div className="max-w-7xl mx-auto" data-aos="fade-right"
            data-aos-duration="2000">
        <h1 className="text-white text-3xl font-semibold">Find Your Dream Property</h1>
        <p className="text-white text-lg mt-2">Explore our vast collection of properties to find the perfect one for you.</p>
      </div>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:px-5 md:mt-5">
        {verifiedProperties.map((item) => (
          <div key={item._id} className="bg-base-200 md:rounded-lg" data-aos="flip-right"
          data-aos-duration="2000">
            <img className="w-full h-60 md:rounded-t-lg" src={item.property_image} alt="" />
            <div className="p-5">
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
                  <p className="text-green-600">{item.verification}</p>
                </div>
              </div>
              <Link to={`/details/${item._id}`}>
                <button className="btn btn-primary">Details</button>
              </Link>
            </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AllProperties;
