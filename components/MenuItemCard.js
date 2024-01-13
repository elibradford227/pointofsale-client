import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

export default function MenuItemCard({ itemObj }) {
  return (
    <Card style={{ width: '17rem', marginRight: '20px', height: '20rem' }} className="carCard">
      <Card.Body>
        <Card.Title>{itemObj.name}</Card.Title>
        <p>Price: {itemObj.price}</p>
      </Card.Body>
    </Card>
  );
}
MenuItemCard.propTypes = {
  itemObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
