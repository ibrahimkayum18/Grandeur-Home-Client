import { useParams } from "react-router-dom";
import useProperties from "../../Hooks/useProperties";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Details = () => {
    const [allReview, setAllReview] = useState([])
  const [reviews, setReviews] = useState([]);
  const [input, setInput] = useState("");
  const [property, setProperty] = useState([]);
  const [properties] = useProperties();
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    if (properties.length > 0) {
      const find = properties.find((item) => item._id === id);
      setProperty(find);
        const findReview = reviews.filter(item => item.property_title == find.property_title)
        setAllReview(findReview);
    }
    
  }, [id, properties, reviews]);
    console.log(allReview);
  useEffect(() => {
    axiosSecure.get("/reviews").then((res) => {
      setReviews(res.data);
    });
  }, [axiosSecure]);
//   console.log(reviews);

  const handleReview = () => {
    const review = {
      reviewre_name: user.displayName,
      reviewer_email: user.email,
      reviewre_photo: user.photoURL,
      review_description: input,
      property_title: property.property_title,
      review_date: new Date()

    };
    axiosSecure.post("/reviews", review).then((res) => {
      console.log(res.data);
    });
    // console.log(review);
  };

  // Add this property to whishlist
  const handleAddToWishlist = item => {
    axiosSecure.post('/wishlists',item)
    .then(res => {
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Property Addeded to Wishlist",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }

  return (
    <div>
      <div className="md:flex gap-5 items-center justify-center">
        <img className="w-full md:w-1/2" src={property.property_image} alt="" />
        <div className="px-5 md:px-0 md:w-1/2 mt-5 md:mt-0 space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold">
            {property.property_title}
          </h2>
          <p>Location: {property.property_location}</p>
          <p>Description</p>
          <p>Price: {property.price_range}$</p>
          <p>Agent Name: {property.agent_name}</p>
          <button onClick={() =>handleAddToWishlist(property)} className="btn btn-primary">Add to wishlist</button>
        </div>
      </div>

      <div className="my-10">
        <h2 className="text-3xl text-center">
          Customers Reviews On this Property
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {
                allReview.map(item => <div key={item._id} className="px-5 lg:px-0 space-y-3 p-8">
                <img className="w-32 h-32 mx-auto rounded-full" src={item.reviewre_photo} alt="" />
                <div className="px-5">
                <h2 className="text-2xl">Name: {item.reviewre_name}</h2>
                <h2 className="text-3xl">Review on: {item.property_title}</h2>
                <p>{item.review_description}</p>
                </div>
            </div>)
            }
        </div>
      </div>
      <div className="text-center">
        <button
          className="btn btn-primary"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Add Review
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box bg-sky-100">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Please add your thoughts on this property</p>
            <div>
              <form>
                <textarea
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  className="textarea textarea-accent w-[90%]"
                  placeholder="Your Reviews..."
                ></textarea>
              </form>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button onClick={handleReview} className="btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Details;
