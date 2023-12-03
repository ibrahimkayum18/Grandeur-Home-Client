import { useNavigate, useParams } from "react-router-dom";
import useProperties from "../../../../Hooks/useProperties";
import { useEffect } from "react";
import { useState } from "react";
import { FaBusinessTime, FaTextHeight, FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Update = () => {
  const [property, setProperty] = useState([]);
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [properties] = useProperties();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  useEffect(() => {
    if (properties.length > 0) {
      const propert = properties.find((property) => property._id === id);
      setProperty(propert);
    }
  }, [properties, id]);

  const handleAddProperties = (e) => {
    e.preventDefault();
    const form = e.target;
    const property_title = form.property_title.value;
    const property_location = form.property_location.value;
    const property_image = form.property_image.value;
    const price_range = form.price_range.value;
    const agent_name = user.displayName;
    const agent_image = user.photoURL;
    const agent_email = user.email;
    const newProperty = {
      property_title,
      property_location,
      property_image,
      price_range,
      agent_name,
      agent_image,
      agent_email,
    };
    console.log(newProperty);
    axiosSecure.put(`/properties/${property._id}`, newProperty)
    .then(res => {
        if(res.data.modifiedCount){
            form.reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${property_title} Updated Successfully`,
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/dashboard/myAddededProperties')
        }
    })
  };
  return (
    <div>
      <h2 className="text-center text-3xl font-bold mt-5">Update: {property.property_title}</h2>
      <div className="divider"></div>
      <form
        onSubmit={handleAddProperties}
        className="w-11/12 md:w-11/12 mx-auto space-y-5 mt-5 lg:p-10 rounded-lg"
      >
        <div className="md:flex justify-center items-center gap-5 space-y-5 md:space-y-0">
          <div className="md:flex flex-col md:w-1/2 relative">
            <label className="py-3">Property title</label>
            <div>
              <FaBusinessTime className="absolute text-primarycolor text-2xl text-gray-500"></FaBusinessTime>
            </div>
            <input
              type="text"
              name="property_title"
              defaultValue={property.property_title}
              placeholder="Property title..."
              className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
            />
          </div>
          <div className="md:flex flex-col md:w-1/2 relative">
            <label className="py-3">Property Location</label>
            <div>
              <FaTextHeight className="absolute text-primarycolor text-2xl text-gray-500"></FaTextHeight>
            </div>
            <input
              type="text"
              name="property_location"
              defaultValue={property.property_location}
              placeholder="Property Location..."
              className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
            />
          </div>
        </div>
        <div className="md:flex justify-center items-center gap-5 space-y-5 md:space-y-0">
          <div className="md:flex flex-col md:w-1/2 relative">
            <label className="py-3">Property Image URL</label>
            <div>
              <FaUser className="absolute text-primarycolor text-2xl text-gray-500"></FaUser>
            </div>
            <input
              type="text"
              name="property_image"
              defaultValue={property.property_image}
              placeholder="Property Image URL..."
              className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
            />
          </div>
          <div className="md:flex flex-col md:w-1/2 relative">
            <label className="py-3">Price Range</label>
            <div>
              <FaTextHeight className="absolute text-primarycolor text-2xl text-gray-500"></FaTextHeight>
            </div>
            <input
              type="text"
              name="price_range"
              defaultValue={property.price_range}
              placeholder="State Your Price..."
              className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
            />
          </div>
        </div>
        <button
          type="submit"
          className="font-bold bg-sky-300 w-full py-3 btn rounded-lg"
        >
          Update Property
        </button>
      </form>
    </div>
  );
};

export default Update;
