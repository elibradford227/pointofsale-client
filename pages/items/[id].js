import React, { useEffect, useState } from 'react';
import { getItems } from '../../api/itemData';
import MenuItemCard from '../../components/MenuItemCard';

export default function SelectItems() {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleClick = (item) => {
    console.warn(item);
    setSelectedItems((prevArr) => [...prevArr, item]);
  };

  const getAllitems = () => {
    getItems().then((res) => setItems(res));
  };

  useEffect(() => {
    getAllitems();
  }, []);

  console.warn(handleClick);

  console.warn(selectedItems);
  return (
    <div>
      <div className="d-flex flex-wrap">
        {items.map((item) => (
          <MenuItemCard key={item.id} itemObj={item} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}
