import React, { useEffect, useState } from "react";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import CheckOutForm from "../../../../components/CheckOutForm/CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import setTitle from "../../../../utls/setTitle";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
    const {id} = useParams();
    const [paymentClass, setPaymentClass] = useState({});
    const [axiosSecure] = useAxiosSecure();
    setTitle('Payment')
    useEffect(()=>{
        const getPrice = async()=>{
            const res = await axiosSecure.get(`/selected-classes/${id}`)
            setPaymentClass(res.data.paymentClass)
        }
        getPrice()
    },[axiosSecure, id])
  return (
    <div className="w-full md:mt-10">
      <SectionHeader
        title="Yeah! Payment now"
        subTitle="Start gain new skills"
      ></SectionHeader>
      <div className="mt-8 md:mt-20 md:mx-20 p-4 md:py-8 md:px-5 rounded shadow-lg border-t min-h-[200px]">
        <Elements stripe={stripePromise}>
          <CheckOutForm paymentClass={paymentClass}/>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
