import Swal from "sweetalert2";
import useWishlist from "../../../../Hooks/useWishlist";
import { ImCross } from "react-icons/im";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const Wishlist = () => {
  const [myWishes, refetch] = useWishlist();
  const [wishes1, setWishes1] = useState([])
  const {user} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    if(myWishes.length >0){
      const filter = myWishes.filter(item => item.buyer_email === user.email);
      setWishes1(filter)
    }
  },[myWishes, user.email])
  const handleDelete = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/wishlists/${id}`)
            .then(res => {
                console.log(res.data);
                if(res.data.acknowledged){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
            })
        }
      });
  }

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold pt-8">Wish To Buy</h2>
      <div className="my-5 w-full">
        <hr />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {wishes1.map((wishes) => (
          <div key={wishes._id} className="bg-gray-100 rounded-lg">
            <img className="rounded-t-lg h-60" src={wishes.property_image} alt="" />
            <div className="px-3">
              <h2 className="text-xl font-bold">{wishes.property_title}</h2>
              <p>Location: {wishes.property_location}</p>
              <p>Price Range: {wishes.price_range}</p>
            </div>
            <div className="flex justify-between px-3 mt-2">
              <div className="flex items-center gap-3">
                <img
                  className="w-12 h-12 rounded-full"
                  src={wishes.agent_image}
                  alt=""
                />
                <div>
                  <h2 className="text-xl font-bold">{wishes.agent_name}</h2>
                  <p className="text-green-600">{wishes.verification_status}</p>
                </div>
              </div>
            </div>
            <div className="text-center my-4 flex gap-5 justify-center items-center">
              <div>
                <Link to={`/makeOffer/${wishes._id}`}><button className="btn border-b-4 border-green-600">Make an Offer</button></Link>
              </div>
              <div>
                <button onClick={() => handleDelete(wishes._id)} className="btn border-b-4 border-red-600">
                  <ImCross />
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

export default Wishlist;
