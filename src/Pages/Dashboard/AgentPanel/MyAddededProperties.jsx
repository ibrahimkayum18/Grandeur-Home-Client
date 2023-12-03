import { useContext } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useMyProperty from "../../../Hooks/useMyProperty";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyAddededProperties = () => {
  const [myAllProperties , refetch] = useMyProperty();
  console.log("myProperty", myAllProperties);
  // const {user} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure();
  // axiosSecure.get(`/properties?agent_email=${user?.email}`)
  // .then(res => {
  //     console.log(res.data);
  // })

  const handleDelete = (property) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/properties/${property._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-5">
        My All Addeded Properties
      </h2>
      <div className="divider"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {myAllProperties.map((property, index) => (
          <div key={index} className="bg-gray-100 rounded-lg">
            <img
              className="rounded-t-lg w-full h-60"
              src={property.property_image}
              alt=""
            />
            <div className="px-3">
              <h2 className="text-xl font-bold">{property.property_title}</h2>
              <p>Location: {property.property_location}</p>
              <p>Price Range: {property.price_range}</p>
            </div>
            <div className="flex justify-between px-3 mt-2">
              <div className="flex items-center gap-3">
                <img
                  className="w-12 h-12 rounded-full"
                  src={property.agent_image}
                  alt=""
                />
                <div>
                  <h2 className="text-xl font-bold">{property.agent_name}</h2>
                  <p className="text-green-600">
                    {property.verification_status}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center my-4 flex gap-5 justify-center items-center">
              <div>
                <Link to={`/update/${property._id}`}>
                  <button className="btn border-b-4 border-green-600">
                    {" "}
                    Update
                  </button>
                </Link>
              </div>
              <div>
                <button
                  onClick={() => handleDelete(property)}
                  className="btn border-b-4 border-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAddededProperties;
