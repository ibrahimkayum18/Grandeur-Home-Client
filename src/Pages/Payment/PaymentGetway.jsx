import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const stripePromis = loadStripe(import.meta.env.VITE_PAYMENT_KEY)

const PaymentGetway = () => {
    const [offeredProperties, setOfferedProperties] = useState([]);

    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    useEffect(() => {
      axiosSecure.get(`/offered/buyer_email/${user.email}`).then((res) => {
        setOfferedProperties(res.data);
        console.log(res.data);
      });
    }, [axiosSecure, user.email]);
    return (
        <div>
            <h2>Payment Page</h2>
            <div className="divider"></div>
            <div className="w-1/2 mx-auto">
                <Elements stripe={stripePromis}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default PaymentGetway;