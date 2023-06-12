import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";
import axios from "axios";

const CheckoutFrom = ({ price, course }) => {

    const { user } = useContext(AuthContext);
    const [clientSecret, setClientSecret] = useState();
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState();
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError('');
        }
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || "anonymous",
                        email: user?.email || 'unknown'
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message)

        }
        setProcessing(false)

        if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id)
            const payment = {
                email: user?.email,
                name: user?.displayName,
                transactionId: paymentIntent.id,
                price: price,
                date: new Date(),
                courseId: course._id,
                className: course.className,
                instructorName: course.instructorName,
                image: course.image,
                status: 'enrolled',
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.result.insertedId) {
                        axios.patch(`http://localhost:5000/student/myClasses/${course._id}`)
                            .then(() => { })

                        Swal.fire({
                            icon: 'success',
                            title: 'Payments Success',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })

        }
    }


    return (
        <form className="w-2/3 mx-auto mt-20" onSubmit={handleSubmit}>
            <CardElement 
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: 'green',
                            '::placeholder': {
                                color: 'black',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className="btn btn-primary btn-sm mt-20" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
            <div className="mt-10">
                <p className="text-red-600">{cardError}</p>
                {transactionId && <p className="text-green-600">Transaction complete with transactionId:{transactionId}</p>}
            </div>
        </form>
    );
};

export default CheckoutFrom;