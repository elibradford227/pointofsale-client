import React, { useState } from 'react';
// import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { deleteOrder } from '../../api/orderData';
import { createRevenue } from '../../api/revenueData';

const initialState = {
  payment_type: '',
  tip: 0,
  total: 0,
};

function CloseOrderForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.warn(obj);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formInput, order_type: obj.type, order: obj.id };
    obj.items.forEach((item) => {
      payload.total += Number(item.price);
    });
    payload.total += Number(payload.tip);
    createRevenue(payload);
    deleteOrder(obj.id);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">Close Order</h2>

      <FloatingLabel label="Select Payment">
        <Form.Select
          placeholder="Payment Type"
          onChange={handleChange}
          name="payment_type"
          value={formInput.type}
        >
          <option>Choose Type</option>
          <option
            key="1"
            value="Cash"
          >
            Cash
          </option>
          <option
            key="2"
            value="Card"
          >
            Card
          </option>
        </Form.Select>
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="Tip Amount" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Tip Amount"
          name="tip"
          value={formInput.tip}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <Button type="submit" variant="dark">Close Order</Button>
    </Form>
  );
}

CloseOrderForm.propTypes = {
  id: initialState,
  obj: PropTypes.shape({
    id: PropTypes.number,
    payment_type: PropTypes.string,
    tip: PropTypes.number,
    total: PropTypes.number,
    type: PropTypes.string,
    items: PropTypes.shape({
      id: PropTypes.string,
      price: PropTypes.number,
      name: PropTypes.string,
      forEach: PropTypes.func,
    }),
  }),
};

CloseOrderForm.defaultProps = {
  id: 0,
  obj: PropTypes.shape({
    id: 0,
    payment_type: '',
    tip: 0,
    total: 0,
    order_type: '',
  }),
};

export default CloseOrderForm;
