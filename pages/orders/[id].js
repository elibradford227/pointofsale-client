/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { getSingleOrder } from '../../api/orderData';
import OrderItemCard from '../../components/OrderItemCard';

export default function OrderDetails() {
  const router = useRouter();

  const order = router.query.id;

  const [orderDetails, setOrderDetails] = useState([]);
  const [total, setTotal] = useState(0);
  const [change, setChange] = useState(false);

  useEffect(() => {
    getSingleOrder(order).then((res) => setOrderDetails(res));
  }, [order, change]);

  useEffect(() => {
    let newTotal = 0;
    orderDetails.items?.forEach((item) => {
      newTotal += item.price;
    });
    setTotal(newTotal);
  }, [orderDetails]);

  return (
    <div>
      <div className="details-header">
        <h1>{orderDetails.name}</h1>
        <h2>Customer Phone: {orderDetails.customer_phone}</h2>
        <h2>Customer Email: {orderDetails.customer_email}</h2>
        <h2>Status: {orderDetails.status}</h2>
        <h2>Order Type: {orderDetails.type}</h2>
        <h1>Total: {total.toFixed(2)} </h1>
      </div>
      <div className="d-flex flex-wrap">
        {orderDetails.length === 0 ? '' : orderDetails.items.map((item) => (
          <OrderItemCard key={item.id} itemObj={item} order={orderDetails} setChange={setChange} />
        ))}
      </div>
      <Link href={`/items/${orderDetails.id}`} passHref>
        <Button className="page-button">Add Item</Button>
      </Link>
      <Link href={`/orders/close/${orderDetails.id}`} passHref>
        <Button className="page-button">Close Order</Button>
      </Link>
    </div>
  );
}
