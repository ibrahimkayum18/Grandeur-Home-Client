import { Link } from "react-router-dom";
import useOffered from "../../../../Hooks/useOffered";
import { ImCross } from "react-icons/im";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const PropertyBought = () => {
  const [myProperty, setMyProperty] = useState([]);
  const [offeredProperties, refetch] = useOffered();
  const { user } = useContext(AuthContext);
  console.log(offeredProperties);
  useEffect(() => {
    if (offeredProperties.length > 0) {
      const filter = offeredProperties.filter(
        (item) => item.buyer_email === user.email
      );
      console.log(filter);
      setMyProperty(filter);
    }
  }, [offeredProperties, user.email]);

  return (
    <div>
      <h2 className="mt-5 text-3xl font-bold text-center">
        Total Property Bought
      </h2>
      <div className="divider"></div>
      {myProperty.length < 1 ? (
        <>
          <h2 className="text-3xl font-semibold">No property bought</h2>
          <p className="text-xl">
            Please offer your price from wishlish to buy property
          </p>
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {myProperty.map((wishes) => (
            <div key={wishes._id} className="bg-gray-100 rounded-lg">
              <img
                className="rounded-t-lg h-60"
                src={wishes.property_image}
                alt=""
              />
              <div className="px-3">
                <h2 className="text-xl font-bold">{wishes.property_title}</h2>
                <p>Location: {wishes.property_location}</p>
                <p>Agent Name: {wishes.agent_name}</p>
                <p>Offered Price: ${wishes.offered_price}</p>
                <p>
                  Status:{" "}
                  <span className="text-green-600">{wishes.status}</span>
                </p>
              </div>
              <div className="text-center my-4 flex gap-5 justify-center items-center">
                {wishes.status === "accepted" && (
                  <div>
                    <Link to={`/dashboard/payment`}>
                      <button className="btn border-b-4 border-green-600">
                        Pay
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyBought;
