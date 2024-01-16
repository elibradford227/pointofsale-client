/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { getRevenues } from '../api/revenueData';

const map = {
  total: 0,
  tips: 0,
  phoneOrders: 0,
  inHouseOrders: 0,
  cash: 0,
  card: 0,
};

export default function RevenuePage() {
  const [revenue, setRevenue] = useState([]);

  const getTheRevenue = () => {
    getRevenues().then((res) => setRevenue(res));
  };

  useEffect(() => {
    getTheRevenue();
  }, []);

  useEffect(() => {
    revenue.forEach((res) => {
      map.total += res.total;
      map.tips += res.tip;
      res.payment_type === 'Cash' ? map.cash += 1 : map.card += 1;
      res.order_type === 'In-Person' ? map.inHouseOrders += 1 : map.phoneOrders += 1;
    });
  });

  return (
    <div>
      <div>
        <h1>Total Revenue: {map.total}</h1>
        <p>Tips: {map.tips}</p>
        <p>Phone Orders: {map.phoneOrders}</p>
        <p>In House Orders: {map.inHouseOrders}</p>
        <p>Cash Orders: {map.cash}</p>
        <p>Card Orders: {map.card}</p>
      </div>
    </div>
  );
}
