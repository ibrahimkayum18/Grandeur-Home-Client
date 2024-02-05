import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useReviews from "../../../../Hooks/useReviews";
import { MdDelete } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const MyReviews = () => {
  const [myAllReviews, refetch] = useReviews();
  const [reviwes, setReviews] = useState([])
  const {user} = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if(myAllReviews.length > 0){
      const filter = myAllReviews.filter(item => item.reviewer_email === user.email)
      setReviews(filter);
    }
  },[myAllReviews, user?.email])

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
        axiosSecure.delete(`/reviews/${id}`).then((res) => {
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
    <div className="z-20">
      <h2 className="text-center pt-5 text-3xl font-bold">My All Reviews</h2>
      <div className="overflow-x-auto z-10">
        <table className="table mt-14 w-full -z-50">
         
          <thead>
            <tr>
              <th>#</th>
              <th>property title</th>
              <th>Agent name</th>
              <th>Review time</th>
              <th>Review description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reviwes.map((reviews, index) => (
              <tr key={reviews._id}>
                <td>{index + 1}</td>
                <td>{reviews.property_title}</td>
                <td>{reviews.agent_name}</td>
                <td>{reviews.review_date}</td>
                <td>{reviews.review_description}</td>
                <th className="">
                  <button
                    onClick={() => handleDelete(reviews._id)}
                    className="text-2xl text-red-500 cursor-pointer"
                  >
                    {" "}
                    <MdDelete />
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

export default MyReviews;
