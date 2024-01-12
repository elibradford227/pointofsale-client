import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteOrder } from '../api/orderData';

export default function OrderCard({ orderObj }) {
  const deleteThisOrder = () => {
    if (window.confirm('Delete order?')) {
      deleteOrder(orderObj.id);
    }
  };

  return (
    <Card style={{ width: '17rem', marginRight: '20px', height: '20rem' }} className="carCard">
      <Card.Body>
        <Card.Title>{orderObj.name}</Card.Title>
        <p>Status: {orderObj.status}</p>
        <p>Customer Phone Number: {orderObj.customer_phone}</p>
        <p>Customer Email: {orderObj.customer_email}</p>
        <p>Order Type: {orderObj.type}</p>
        <Link href={`/orders/${orderObj.id}`} passHref>
          <Button variant="primary" className="viewBtn">View</Button>
        </Link>
        <Link href={`/orders/edit/${orderObj.id}`} passHref>
          <Button variant="secondary" className="viewBtn">Edit</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisOrder}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

OrderCard.propTypes = {
  orderObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    closed: PropTypes.bool,
    status: PropTypes.string,
    type: PropTypes.string,
    customer_phone: PropTypes.string,
    customer_email: PropTypes.string,
  }).isRequired,
};
