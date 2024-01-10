import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

export default function OrderCard({ orderObj }) {
  return (
    <Card style={{ width: '17rem', marginRight: '20px', height: '20rem' }} className="carCard">
      <Card.Body>
        <Card.Title>{orderObj.name}</Card.Title>
        <p>Status: {orderObj.status}</p>
        <p>Customer Phone Number: {orderObj.customer_phone}</p>
        <p>Customer Email: {orderObj.customer_email}</p>
        <p>Order Type: {orderObj.type}</p>
        <Link href={`/pages/${orderObj.id}`} passHref>
          <Button variant="primary" className="viewBtn">View</Button>
        </Link>
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
