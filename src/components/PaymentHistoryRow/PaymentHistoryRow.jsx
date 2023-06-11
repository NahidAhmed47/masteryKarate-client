import React from "react";

const PaymentHistoryRow = ({ eachClass, index }) => {
  return (
    <tr className="bg-base-200">
      <th>{index + 1}</th>
      <td>{eachClass.className}</td>
      <td>${eachClass?.price}</td>
      <td>{eachClass?.transactionId}</td>
    </tr>
  );
};

export default PaymentHistoryRow;
