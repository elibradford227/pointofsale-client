/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import { getItems, createOrderItem } from '../../api/itemData';
import MenuItemCard from '../../components/MenuItemCard';

export default function SelectItems() {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const router = useRouter();

  const { id } = router.query;

  const handleClick = (item) => {
    setSelectedItems((prevArr) => [...prevArr, item]);
  };

  const getAllitems = () => {
    getItems().then((res) => setItems(res));
  };

  async function routeChange() {
    router.push(`/orders/${id}`);
  }

  async function addItems() {
    if (selectedItems.length === 0) {
      alert('Please select items from menu');
    } else {
      await Promise.all(selectedItems.map(async (item) => {
        const payload = { order: id, item: item.id };
        await createOrderItem(payload);
      }));
      await routeChange();
    }
  }

  useEffect(() => {
    getAllitems();
  }, []);

  return (
    <div>
      <h1>Selected Items</h1>
      <div className="d-flex flex-wrap">
        {selectedItems.length === 0 ? '' : selectedItems.map((item) => (
          <MenuItemCard key={item.id} itemObj={item} />
        ))}
      </div>
      <Button variant="primary" className="addBtn" onClick={addItems}>Add Selected Items</Button>
      <h1>Menu Items</h1>
      <div className="d-flex flex-wrap">
        {items.map((item) => (
          <MenuItemCard key={item.id} itemObj={item} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}
