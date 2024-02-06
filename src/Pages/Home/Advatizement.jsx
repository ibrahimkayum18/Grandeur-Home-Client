
import { useEffect, useState } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Advatizement = () => {
  const axiosPublic = useAxiosPublic();
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    axiosPublic.get("/properties").then((res) => {
      setProperties(res.data);
    });
  }, [axiosPublic]);
  console.log(properties);
  return (
    <div className="mt-10 lg:mx-10 overflow-hidden" >
        <div className="text-center overflow-hidden" data-aos="fade-up">
            <h2 className="text-4xl font-bold">Best Property Today!!!</h2>
            <p className="text-xl mt-4">Check It Quickly</p>
        </div>
        <div className="my-10">
            <hr />
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden md:gap-5 md:px-5 lg:px-0">
        {properties.slice(0,4).map((item, index) => (
          <div
            key={index}
            className=" card-compact overflow-hidden bg-base-100 shadow-xl "
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            <figure>
              <img className="w-full h-60" src={item.property_image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Location: {item.property_location}</h2>
              <p>Price Range: {item.price_range}</p>
              <div className="flex gap-3 justify-start items-center">
              <p className="text-green-600">{item.verification_status}  </p>
              <p className="text-green-600"><span><RiVerifiedBadgeFill /></span> </p>
              </div>
              <div className="card-actions justify-center w-full">
              <Link to={`/details/${item._id}`}>
                <button className="btn btn-primary">Details</button>
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advatizement;
