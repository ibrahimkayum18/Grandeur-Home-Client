import { useParams } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import useWishlist from "../../Hooks/useWishlist";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MakeOffer = () => {
  const [wishedProperty, setWishedProperty] = useState([]);
  const [allWished, setAllWished] = useState([]);
  const { id } = useParams();
  const [myWishes] = useWishlist();
  const {user} = useContext(AuthContext)
  const inputRef = useRef();
  const axiosSecure = useAxiosSecure();
//   const [lowerPrice, setLowerPrice] = useState(0)
//   const [higherPrice, setHigherPrice] = useState(0)
  //   console.log(id);
  useEffect(() => {
    if (myWishes.length > 0) {
      const find = myWishes.find((item) => item._id === id);
      setWishedProperty(find);
      const filter = myWishes.filter((item) => item._id !== id);
      setAllWished(filter);
        // const lower = parseInt(wishedProperty.price_range.split("-")[0]);
        // setLowerPrice(lower)
        // const higher = parseInt(wishedProperty.price_range.split("-")[1]);
        // setHigherPrice(higher)
        
    }
  }, [myWishes, id, wishedProperty.price_range]);

  const handleMakeOffer = e => {
    e.preventDefault()
    const price = inputRef.current.value;
    // if(price >= lowerPrice && price <= higherPrice){
        const offerdProperty = {
            offered_price: price,
            property_title: wishedProperty.property_title,
            property_location: wishedProperty.property_location,
            agent_name:wishedProperty.agent_name,
            buyer_name: user.displayName,
            buyer_email: user.email,
            buying_date: Date(),
            status: 'pending'
        }
        axiosSecure.post('/offered', offerdProperty)
        .then(res => {
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    // }
    // else{
    //     Swal.fire({
    //         icon: "error",
    //         title: "Oops...",
    //         text: "Please offer the right price"
    //       });
    // }

    
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-5">
        Make an offer to buy the price
      </h2>
      <div className="divider"></div>
      <div>
        <form onSubmit={handleMakeOffer} className="w-[90%] mx-auto space-y-5">
          <div className="md:flex gap-5">
            <div className="md:flex flex-col md:w-1/2 relative">
              <label className="py-3">Property Title</label>
              <div></div>
              <input
                type="text"
                value={wishedProperty.property_title}
                placeholder="Property Location..."
                className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
              />
            </div>
            <div className="md:flex flex-col md:w-1/2 relative">
              <label className="py-3">Property Location</label>
              <div></div>
              <input
                type="text"
                value={wishedProperty.property_location}
                placeholder="Property Location..."
                className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
              />
            </div>
          </div>
          <div className="md:flex gap-5">
            <div className="md:flex flex-col md:w-1/2 relative">
              <label className="py-3">Agent Name</label>
              <div></div>
              <input
                type="text"
                value={wishedProperty.agent_name}
                placeholder="Property Location..."
                className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
              />
            </div>
            <div className="md:flex flex-col md:w-1/2 relative">
              <label className="py-3">Offer Price</label>
              <div></div>
              <input
                type="text"
                ref={inputRef}
                placeholder="Offer Your Price..."
                className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
              />
            </div>
          </div>
          <div className="md:flex gap-5">
            <div className="md:flex flex-col md:w-1/2 relative">
              <label className="py-3">Buyer Name</label>
              <div></div>
              <input
                type="text"
                value={user.displayName}
                placeholder="Property Location..."
                className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
              />
            </div>
            <div className="md:flex flex-col md:w-1/2 relative">
              <label className="py-3">Buyer Email</label>
              <div></div>
              <input
                type="text"
                value={user.email}
                placeholder="Property Location..."
                className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg w-full"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-full">Offer</button>
        </form>
      </div>
    </div>
  );
};

export default MakeOffer;
