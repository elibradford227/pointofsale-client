import React, { useEffect, useState } from 'react';
import { getOrders } from '../api/orderData';
import OrderCard from '../components/OrderCard';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [change, setChange] = useState(false);

  const getAllOrders = () => {
    getOrders().then((res) => setOrders(res));
  };

  useEffect(() => {
    getAllOrders();
  }, [change]);
  return (
    <div>
      <div className="orders">
        <h1>Orders</h1>
        <br />
        <div className="d-flex flex-wrap">
          {orders.map((order) => (
            <OrderCard key={order.id} orderObj={order} setChange={setChange} />
          ))}
        </div>
      </div>
    </div>
  );
}
