import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUserShield, FaUsersCog } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  console.log(users);

  const handleDelete = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
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

  const handleMaheAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to make this user as an admin",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0){
            refetch()
            Swal.fire({
              title: "Success!",
              text: "Admin Created Successfully",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleMakeAgent = user => {
    Swal.fire({
        title: "Are you sure?",
        text: "You want to make this user as an agent",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, make agent!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.patch(`/users/agent/${user._id}`).then((res) => {
            if (res.data.modifiedCount > 0){
                refetch()
              Swal.fire({
                title: "Success!",
                text: "Agent Created Successfully",
                icon: "success",
              });
            }
          });
        }
      });
  }

  return (
    <div>
      <div className="flex justify-around text-3xl font-bold -z-40 my-5 gap-6">
        <h2>All Users </h2>
        <h2>total users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto ">
        <table className="table w-full -z-50">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Make Agent</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="text-center">
                  {user.role === 'admin' ? 'admin' : <button
                    onClick={() => handleMaheAdmin(user)}
                    className="text-2xl btn"
                  >
                    <FaUsersCog />
                  </button>}
                </td>
                <td className="text-center">
                  {user.role === 'agent' ? 'agent' : <button 
                  onClick={() => handleMakeAgent(user)}
                  className="text-2xl btn">
                    <FaUserShield />
                  </button>}
                </td>
                <td className="text-center">
                  <button
                    onClick={() => handleDelete(user)}
                    className="text-2xl btn"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
