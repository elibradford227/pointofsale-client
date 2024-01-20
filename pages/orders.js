import React, { useEffect, useState } from 'react';
import { getOrders } from '../api/orderData';
import OrderCard from '../components/OrderCard';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const getAllOrders = () => {
    getOrders().then((res) => setOrders(res));
  };

  useEffect(() => {
    getAllOrders();
  }, []);
  return (
    <div>
      <div className="orders">
        <h1>Orders</h1>
        <br />
        <div className="d-flex flex-wrap">
          {orders.map((order) => (
            <OrderCard key={order.id} orderObj={order} />
          ))}
        </div>
      </div>
    </div>
  );
}
