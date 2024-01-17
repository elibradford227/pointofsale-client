import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CloseOrderForm from '../../../components/forms/CloseOrderForm';
import { getSingleOrder } from '../../../api/orderData';

export default function CloseOrder() {
  const [order, setOrder] = useState({});

  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleOrder(id).then((res) => setOrder(res));
  }, [id]);

  return (
    <div>
      <CloseOrderForm obj={order} />
    </div>
  );
}
