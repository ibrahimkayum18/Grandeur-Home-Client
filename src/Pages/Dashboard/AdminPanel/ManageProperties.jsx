import useProperties from "../../../Hooks/useProperties";
import { TiTickOutline } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageProperties = () => {
  const [properties, refetch] = useProperties();
  const axiosSecure = useAxiosSecure();

  const handleVerify = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You want to Verify This Property?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Verify",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.patch(`/properties/verified/${id}`).then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                title: "Success!",
                text: "The Property has been Verified",
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
      text: "You want to Reject This Property?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Reject the Deal",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/properties/rejected/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Success!",
              text: "The Property has been rejected",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold pt-5">Manage Properties</h2>
      <div className="divider"></div>
      <div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Property title</th>
              <th>Property Location</th>
              <th>Agent Email</th>
              <th>Agent Name</th>
              <th>Price Range</th>
              <th>Verify</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.property_title}</td>
                <td>{item.property_location}</td>
                <td>{item.agent_email}</td>
                <td>{item.agent_name}</td>
                <td>${item.price_range}</td>
                {item.verification === "pending" ? (
                  <td className="text-green-600">
                    <button
                      onClick={() => handleVerify(item._id)}
                      className="btn text-2xl font-bold "
                    >
                      <TiTickOutline />
                    </button>
                  </td>
                ) : item.verification === "rejected" ? (
                  <td></td>
                ) : (
                  <td className="text-green-600">Verified</td>
                )}
                {item.verification === "pending" ? (
                  <td className="text-green-600">
                    <button
                      onClick={() => handleReject(item._id)}
                      className="btn text-2xl font-bold "
                    >
                      <ImCross />
                    </button>
                  </td>
                ) : item.status === "verified" ? (
                  <td></td>
                ) : (
                  <td className="text-red-600">Rejected</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProperties;
