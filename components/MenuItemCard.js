import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function MenuItemCard({ itemObj, handleClick }) {
  console.warn(handleClick);
  return (
    <Card style={{ width: '17rem', marginRight: '20px', height: '20rem' }} className="carCard">
      <Card.Body>
        <Card.Title>{itemObj.name}</Card.Title>
        <p>Price: {itemObj.price}</p>
        <Button variant="primary" className="m-2" onClick={() => handleClick(itemObj)}>
          Add
        </Button>
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
  handleClick: PropTypes.func.isRequired,
};
