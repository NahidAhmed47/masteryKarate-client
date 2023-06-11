import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import useSelectedClass from "../../hooks/useSelectedClass";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutForm = ({ paymentClass }) => {
  const {price, className, _id } = paymentClass;
  const stripe = useStripe();
  const elements = useElements();
  const [selectedClasses, refetch] = useSelectedClass();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const getClientSecret = async () => {
      const res = await axiosSecure.post("/create-payment-intent", { price });
      if(res.data?.clientSecret){
        setClientSecret(res.data.clientSecret);
      }
    };
    getClientSecret();
  }, [paymentClass, axiosSecure, price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setProcessing(true);
    if (error) {
      setErr(error.message);
    } else {
      setErr("");
    }
    const { paymentIntent, error: confirmationErr } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.name || "anonymous",
          },
        },
      });
    if (confirmationErr) {
      setErr(confirmationErr.message);
    }
    setProcessing(false);
    console.log(paymentIntent)
    const remainingClasses = selectedClasses.filter(
      (eachClass) => eachClass !== _id
    );
    if(paymentIntent.status === "succeeded") {
      axiosSecure.post('/payments', {name: user?.displayName, email: user?.email, transactionId: paymentIntent.id, className, price, class_id: _id})
      .then(res => {
        if(res.data.insertedId){
          axiosSecure.patch('/payments', {email: user?.email,class_id: _id, remainingClasses})
          .then(res => {
            console.log(res.data)
            if(res.data.updateClass.modifiedCount > 0 && res.data.updateInst.modifiedCount > 0 && res.data.updateStudent.modifiedCount > 0 ){
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'payment successful',
                showConfirmButton: false,
                timer: 1500
              })
              navigate('/dashboard/selected-classes', {replace: true})
            }
          })
        }
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full flex flex-col justify-between relative"
    >
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        className=" mt-16 md:mt-24 py-1 rounded text-white font-kanit font-medium hover:bg-primary duration-300 text-sm w-[150px] mx-auto bg-blue-600"
        disabled={!stripe || !clientSecret || processing}
      >
        Pay
      </button>
      <div className="absolute top-[50%] left-0 right-0">
        <p className="text-red-500 font-kanit text-sm font-medium text-center">
          {err}
        </p>
      </div>
    </form>
  );
};

export default CheckOutForm;
