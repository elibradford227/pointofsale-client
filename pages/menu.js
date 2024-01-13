import React, { useEffect, useState } from 'react';
import { getItems } from '../api/itemData';
import MenuItemCard from '../components/MenuItemCard';

export default function Menu() {
  const [items, setItems] = useState([]);

  const getAllitems = () => {
    getItems().then((res) => setItems(res));
  };

  useEffect(() => {
    getAllitems();
  }, []);
  return (
    <div>
      <div className="d-flex flex-wrap">
        {items.map((item) => (
          <MenuItemCard key={item.id} itemObj={item} />
        ))}
      </div>
    </div>
  );
}
