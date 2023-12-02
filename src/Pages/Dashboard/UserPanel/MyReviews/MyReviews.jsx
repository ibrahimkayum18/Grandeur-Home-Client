import useReviews from "../../../../Hooks/useReviews";
import { MdDelete } from "react-icons/md";

const MyReviews = () => {
  const [myAllReviews] = useReviews();
  console.log(myAllReviews);
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
            {
                myAllReviews.map(reviews =><tr key={reviews._id}>
                    <td>
                        {reviews.property_title}
                    </td>
                    <td>
                        Agent name
                    </td>
                    <td>Date</td>
                    <td>{reviews.review_description}</td>
                    <th>
                      <button className="text-2xl text-red-500"> <MdDelete /></button>
                    </th>
                  </tr>)
            }
            {/* row 1 */}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
