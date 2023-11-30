import axios from "axios";
import { useEffect, useState } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Advatizement = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    axios.get("./../../../public/Advertizement.json").then((res) => {
      setProperties(res.data);
    });
  }, []);
  console.log(properties);
  return (
    <div className="my-20 lg:mx-10">
        <div className="text-center">
            <h2 className="text-4xl font-bold">Best Property Today!!!</h2>
            <p className="text-xl mt-4">Check It Quickly</p>
        </div>
        <div className="my-10">
            <hr />
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 lg:px-0">
        {properties.slice(0,4).map((item, index) => (
          <div
            key={index}
            className="card card-compact  bg-base-100 shadow-xl "
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
                <button className="btn btn-primary">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advatizement;
