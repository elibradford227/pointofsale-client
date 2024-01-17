import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
// import { useAuth } from '../../utils/context/authContext';

const initialState = {
  payment_type: '',
  tip: '',
};

function CloseOrderForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  // const router = useRouter();

  // const { user } = useAuth();

  console.warn(obj);
  console.warn(initialState);

  useEffect(() => {
    if (obj) {
      initialState.total = obj.total + initialState.tip;
      initialState.order_type = obj.type;
      initialState.order = obj.id;
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const payload = { ...formInput, uid: user.uid };
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">Close Order</h2>

      <FloatingLabel label="Select Order Type">
        <Form.Select
          placeholder="Order Type"
          onChange={handleChange}
          name="type"
          value={formInput.type}
        >
          <option>Choose Type</option>
          <option
            key="1"
            value="Inside"
          >
            In House
          </option>
          <option
            key="2"
            value="Phone"
          >
            Phone
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
  }),
};

CloseOrderForm.defaultProps = {
  id: initialState,
  obj: PropTypes.shape({
    id: PropTypes.number,
    payment_type: PropTypes.string,
    tip: PropTypes.number,
    total: PropTypes.number,
    order_type: PropTypes.string,
  }),
};

export default CloseOrderForm;
