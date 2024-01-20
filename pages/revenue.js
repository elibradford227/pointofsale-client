/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { getRevenues } from '../api/revenueData';

// Initialize to store the returned revenue data from the backend on the DOM

const initialState = {
  total: 0,
  tips: 0,
  phoneOrders: 0,
  inHouseOrders: 0,
  cash: 0,
  card: 0,
};

export default function RevenuePage() {
  const [revenue, setRevenue] = useState([]);
  const [details, setDetails] = useState(initialState);

  const getTheRevenue = () => {
    getRevenues().then((res) => setRevenue(res));
  };

  useEffect(() => {
    getTheRevenue();
  }, []);
  // Populate details based off revenue array

  const populateDetails = () => {
    const map = { ...initialState };
    revenue.forEach((res) => {
      map.total += res.total;
      map.tips += res.tip;
      res.payment_type === 'Cash' ? map.cash += 1 : map.card += 1;
      res.order_type === 'In-Person' ? map.inHouseOrders += 1 : map.phoneOrders += 1;
    });
    setDetails(map);
  };

  useEffect(() => {
    populateDetails();
  }, [revenue]);

  return (
    <div>
      <div className="details-header">
        <h1>Total Revenue: {details.total.toFixed(2)}</h1>
        <h2>Tips: {details.tips}</h2>
        <h2>Phone Orders: {details.phoneOrders}</h2>
        <h2>In House Orders: {details.inHouseOrders}</h2>
        <h2>Cash Orders: {details.cash}</h2>
        <h2>Card Orders: {details.card}</h2>
      </div>
    </div>
  );
}
