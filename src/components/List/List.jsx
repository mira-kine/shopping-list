import React from 'react';
import { useShop } from '../../context/ShopProvider';
import Item from './Item';
import './List.css';

export default function List() {
  const { items, handleUpdate, handleDone, handleDelete } = useShop();

  return (
    <div className="list-container">
      <h2 className="list-title">Shopping List</h2>
      <ul className="list">
        {items.map((item) => (
          <li key={item.id} className="list-item">
            <Item
              item={item}
              handleUpdate={handleUpdate}
              handleDone={handleDone}
              handleDelete={handleDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
