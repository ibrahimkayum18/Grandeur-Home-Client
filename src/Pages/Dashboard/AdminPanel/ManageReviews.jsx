import Swal from "sweetalert2";
import useReviews from "../../../Hooks/useReviews";
import { FaTrash } from "react-icons/fa6";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageReviews = () => {
  const [myAllReviews, refetch] = useReviews();
  //   console.log(myAllReviews);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (review) => {
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
        axiosSecure.delete(`/reviews/${review._id}`).then((res) => {
          refetch()
            console.log(res.data);
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
      <h2 className="text-3xl font-bold text-center mt-5">Manage Reviews</h2>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Review</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myAllReviews.map((review, index) => (
              <tr key={review._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={review.reviewre_photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{review.reviewre_name}</div>
                </td>
                <td>{review.reviewer_email}</td>
                <td>{review.review_description}</td>
                <th>
                  <button
                    onClick={() => handleDelete(review)}
                    className="btn text-red-600 text-xl"
                  >
                    <FaTrash />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageReviews;
