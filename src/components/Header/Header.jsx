import React from 'react';
import { useShop } from '../../context/ShopProvider';

export default function Header() {
  const { items, handleClear } = useShop();
  console.log('items', items);
  return (
    <div className="header-container">
      <p>Number of Items: {items.length}</p>
      <button onClick={handleClear}>Clear All</button>
    </div>
  );
}
