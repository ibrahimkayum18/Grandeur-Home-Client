import useOffered from "../../../Hooks/useOffered";
import { TiTickOutline } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const RequestedProperties = () => {
  const [offeredProperties, refetch] = useOffered();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const handleAccep = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to accept this deal?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Let's Make Deal",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/offered/accept/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Success!",
              text: "The Deal Is Successfull",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleReject = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Reject this deal?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Reject the Deal",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/offered/reject/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Success!",
              text: "The Deal has been rejected",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h2 className="pt-5 text-3xl font-bold">Requested Properties</h2>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Property title</th>
              <th>Property Location</th>
              <th>Buyer Email</th>
              <th>Buyer Name</th>
              <th>Offered Price</th>
              <th>Accept</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {offeredProperties.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.property_title}</td>
                <td>{item.property_location}</td>
                <td>{item.buyer_email}</td>
                <td>{item.buyer_name}</td>
                <td>${item.offered_price}</td>
                {item.status === "pending" ? (
                  <td className="text-green-600">
                    <button
                      onClick={() => handleAccep(item._id)}
                      className="btn text-2xl font-bold "
                    >
                      <TiTickOutline />
                    </button>
                  </td>
                ) : item.status === "rejected" ? (
                  <td></td>
                ) : (
                  <td className="text-green-600">Accepted</td>
                )}
                {item.status === "pending" ? (
                  <td className="text-green-600">
                    <button
                      onClick={() => handleReject(item._id)}
                      className="btn text-2xl font-bold "
                    >
                      <ImCross />
                    </button>
                  </td>
                ) : item.status === "accepted" ? (
                  <td></td>
                ) : (
                  <td className="text-red-600">Rejected</td>
                )}
                {/* <td className="text-green-600">
                  {item.status === "pending" || item.status === "rejected" ? (
                    <button
                      onClick={() => handleAccep(item._id)}
                      className="btn text-2xl font-bold "
                    >
                      <TiTickOutline />
                    </button>
                  ) : (
                    "Accepted"
                  )}
                </td> */}
                {/* <td className="text-red-600">
                  {item.status === "pending" || item.status === "accepted" ? (
                    <button
                      onClick={() => handleReject(item._id)}
                      className="btn text-2xl font-bold "
                    >
                      <ImCross />
                    </button>
                  ) : (
                    "Rejected"
                  )}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestedProperties;
