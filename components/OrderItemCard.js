import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { deleteOrderItem } from '../api/orderData';

export default function OrderItemCard({ itemObj, order, setChange }) {
  const deleteThisItem = async () => {
    if (window.confirm('Delete item from order?')) {
      const payload = { order_item: itemObj.id };
      await deleteOrderItem(order.id, payload);
      setChange((prevState) => !prevState);
    }
  };

  return (
    <Card style={{ width: '17rem', marginRight: '20px', height: '10rem' }}>
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
  setChange: PropTypes.func.isRequired,
};
