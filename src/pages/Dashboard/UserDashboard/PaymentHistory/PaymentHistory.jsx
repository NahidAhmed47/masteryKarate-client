import React from "react";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import { useState } from "react";
import { useEffect } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import PaymentHistoryRow from "../../../../components/PaymentHistoryRow/PaymentHistoryRow";
import Loading from "../../../../components/Loading/Loading";
import setTitle from "../../../../utls/setTitle";

const PaymentHistory = () => {
    const [paymentHistory, setPaymentHistory] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    const [loading, setLoading] = useState(true)
    const {user} = useAuth();
    setTitle('Payment History')
    useEffect(()=>{
        const getHistory = async()=>{
            const res = await axiosSecure.get(`/payment-history/${user?.email}`);
            setPaymentHistory(res.data)
            setLoading(false);
        }
        getHistory();
    },[user, axiosSecure])
    if(loading){
      return <Loading></Loading>
    }
  return (
    <div className="w-full md:mt-10">
      <SectionHeader
        title="See classes you enrolled yet"
        subTitle="Enrolled Classes"
      ></SectionHeader>
      <div>
        {
          paymentHistory.length > 0 ? <div className="overflow-x-auto mt-5 md:mt-8">
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
              {
                paymentHistory?.map((eachClass, index) => <PaymentHistoryRow eachClass={eachClass} key={index} index={index}></PaymentHistoryRow>)
              }
            </tbody>
          </table>
        </div> : <div className="text-primary text-center mt-20 lg:mt-28"><i>No payment done yet!</i></div>
        }
      </div>
    </div>
  );
};

export default PaymentHistory;
