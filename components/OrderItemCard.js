import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { deleteOrderItem } from '../api/orderData';

export default function OrderItemCard({ itemObj, order }) {
  const [deleted, setDeleted] = useState(false);
  // Deletes associated item by passing the backend the orderid, and the items id itself. The backend filters the join table with these two values
  const deleteThisItem = () => {
    if (window.confirm('Delete item?')) {
      const payload = { order_item: itemObj.id };
      deleteOrderItem(order.id, payload);
      setDeleted(true);
    }
  };

  if (deleted) {
    return null;
  }

  return (
    <Card style={{ width: '17rem', marginRight: '20px', height: '10rem' }} className="carCard">
      <Card.Body>
        <Card.Title>{itemObj.name}</Card.Title>
        <p>Price: {itemObj.price}</p>
        <Button variant="danger" onClick={deleteThisItem}>Delete</Button>
      </Card.Body>
    </Card>
  );
}
OrderItemCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  itemObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
