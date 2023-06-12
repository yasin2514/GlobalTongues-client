import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutFrom";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
    const course = useLoaderData();
    const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_Gateway_PK}`);

    return (
        <>
            <div className="w-1/2 shadow-black mx-auto mt-20 text-center shadow p-10  rounded-xl">
                <h2 className="text-xl font-bold">Make Payment for {course?.className}</h2>
                <span className="font-semibold">Payable Money is <span className="font-bold text-xl">${course?.price}</span></span>
                <Elements stripe={stripePromise}>
                    <CheckoutForm course={course} price={course.price}></CheckoutForm>
                </Elements>
            </div>
        </>
    );
};

export default Payment