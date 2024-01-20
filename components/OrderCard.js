import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteOrder } from '../api/orderData';

export default function OrderCard({ orderObj, setChange }) {
  const deleteThisOrder = async () => {
    if (window.confirm('Delete order?')) {
      await deleteOrder(orderObj.id);
      setChange((prevState) => !prevState);
    }
  };

  return (
    <Card style={{ width: '20rem', marginLeft: '1.25em' }} className="OrderCard">
      <Card.Body>
        <Card.Title>{orderObj.name}</Card.Title>
        <hr />
        <p>Status: {orderObj.status}</p>
        <p>Customer Phone Number: {orderObj.customer_phone}</p>
        <p>Customer Email: {orderObj.customer_email}</p>
        <p>Order Type: {orderObj.type}</p>
        <hr />
        <Link href={`/orders/${orderObj.id}`} passHref>
          <Button variant="primary" className="order-item-button">View</Button>
        </Link>
        <Link href={`/orders/edit/${orderObj.id}`} passHref>
          <Button variant="secondary" className="order-item-button">Edit</Button>
        </Link>
        <Button variant="danger" className="order-item-button" onClick={deleteThisOrder}>Delete</Button>
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
  setChange: PropTypes.func.isRequired,
};
