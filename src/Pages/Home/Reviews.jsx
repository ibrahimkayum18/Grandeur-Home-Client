import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get("/reviews").then((res) => {
      setReviews(res.data);
    });
  }, [axiosPublic]);
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Our User Reviews</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:px-10">
        {reviews.splice(0, 3).map((item, index) => (
          <div key={index} className="px-5 m-5 lg:m-0 rounded-lg lg:px-0 space-y-3 p-8 bg-gray-300">
            <img
              className="w-28 h-28 mx-auto rounded-full"
              src={item.reviewre_photo}
              alt=""
            />
            <div className="flex justify-center">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            </div>
            <div className="px-5">
              <h2 className="text-2xl font-bold">{item.reviewre_name}</h2>
              <h2 className="text-xl">Review on: {item.property_title}</h2>
              <p className="text-xl">
                Customers Opinion: {item.review_description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
