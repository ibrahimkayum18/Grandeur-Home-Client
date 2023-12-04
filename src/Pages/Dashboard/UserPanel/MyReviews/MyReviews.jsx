import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useReviews from "../../../../Hooks/useReviews";
import { MdDelete } from "react-icons/md";

const MyReviews = () => {
  const [myAllReviews, refetch] = useReviews();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
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
        axiosSecure.delete(`/wishlists/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.acknowledged) {
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
  return (
    <div>
      <h2 className="text-center pt-5 text-3xl font-bold">My All Reviews</h2>
      <div className="overflow-x-auto ">
        <table className="table mt-14 w-full">
          {/* head */}
          <thead>
            <tr>
              <th>property title</th>
              <th>Agent name</th>
              <th>Review time</th>
              <th>Review description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myAllReviews.map((reviews) => (
              <tr key={reviews._id}>
                <td>{reviews.property_title}</td>
                <td>{reviews.agent_name}</td>
                <td>{reviews.review_date}</td>
                <td>{reviews.review_description}</td>
                <th>
                  <button
                    onClick={() => handleDelete(reviews._id)}
                    className="text-2xl text-red-500"
                  >
                    {" "}
                    <MdDelete />
                  </button>
                </th>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
