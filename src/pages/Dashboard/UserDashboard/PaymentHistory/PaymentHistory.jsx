import React from "react";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import { useState } from "react";
import { useEffect } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import PaymentHistoryRow from "../../../../components/PaymentHistoryRow/PaymentHistoryRow";

const PaymentHistory = () => {
    const [paymentHistory, setPaymentHistory] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    const {user} = useAuth();
    useEffect(()=>{
        const getHistory = async()=>{
            const res = await axiosSecure.get(`/payment-history/${user?.email}`);
            setPaymentHistory(res.data)
        }
        getHistory();
    },[user, axiosSecure])
  return (
    <div className="w-full md:mt-10">
      <SectionHeader
        title="See classes you enrolled so far"
        subTitle="Enrolled Classes"
      ></SectionHeader>
      <div>
        <div className="overflow-x-auto mt-5 md:mt-8">
          <table className="table">
            {/* head */}
            <thead className="text-center ">
              <tr>
                <th>No.</th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Transaction ID</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
                {/* TODO: SORT AS LIKE REVERSE WAY */}
              {
                paymentHistory?.map((eachClass, index) => <PaymentHistoryRow eachClass={eachClass} key={index} index={index}></PaymentHistoryRow>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
