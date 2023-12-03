import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromis = loadStripe(import.meta.env.VITE_PAYMENT_KEY)

const PaymentGetway = () => {
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