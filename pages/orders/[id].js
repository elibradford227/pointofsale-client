import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleOrder } from '../../api/orderData';

export default function OrderDetails() {
  const router = useRouter();

  const order = router.query.id;

  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    getSingleOrder(order).then((res) => setOrderDetails(res));
  }, [order]);

  return (
    <div>
      <div className="detailsHeader">
        <h1>{orderDetails.name}</h1>
        <h2>Customer Phone: {orderDetails.customer_phone}</h2>
        <h2>Customer Email: {orderDetails.customer_email}</h2>
        <h2>Status: {orderDetails.status}</h2>
        <h2>Order Type: {orderDetails.type}</h2>
      </div>
    </div>
  );
}
