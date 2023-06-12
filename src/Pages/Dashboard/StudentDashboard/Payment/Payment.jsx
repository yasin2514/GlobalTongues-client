import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutFrom";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
    const course = useLoaderData();
    const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_Gateway_PK}`);

    return (
        <div className="p-8">
            <Elements stripe={stripePromise}>
                <CheckoutForm course={course} price={course.price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment