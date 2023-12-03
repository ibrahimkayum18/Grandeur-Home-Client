import { FaBusinessTime, FaTextHeight, FaUser } from "react-icons/fa";
import { MdDescription, MdDateRange, MdNumbers } from "react-icons/md";
import { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { reload } from "firebase/auth";

const AddJob = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()

  const handleAddProperties = e => {
    e.preventDefault();
    const form = e.target;
    const property_title = form.property_title.value; 
    const property_location = form.property_location.value;
    const property_image = form.property_image.value;
    const price_range = form.price_range.value;
    const agent_name = user.displayName;
    const agent_image = user.photoURL;
    const agent_email = user.email
    const property = {property_title, property_location, property_image, price_range, agent_name, agent_image,agent_email }

    axiosSecure.post('/properties', property)
    .then(res => {
        if(res.data){
            reload()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })


  }


  return (
    <div className="mb-20">
      <Helmet>
        <title>Add Property | Grandeur Home</title>
      </Helmet>
      <form onSubmit={handleAddProperties}  className="w-11/12 md:w-11/12 mx-auto space-y-5 mt-5 lg:p-10 rounded-lg">
        <h2 className="text-center text-4xl font-bold">Add Property Now</h2>
        <div className="md:flex justify-center items-center gap-5 space-y-5 md:space-y-0">
          <div className="md:flex flex-col md:w-1/2 relative">
            <label className="py-3">Property title</label>
            <div>
              <FaBusinessTime className="absolute text-primarycolor text-2xl text-gray-500"></FaBusinessTime>
            </div>
            <input
              type="text"
              name="property_title"
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
              placeholder="State Your Price..."
              className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
            />
            
          </div>
        </div>
        <button type="submit" className="font-bold bg-sky-300 w-full py-3 btn rounded-lg">Add Property</button>
      </form>
    </div>
  );
};

export default AddJob;