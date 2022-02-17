import React from 'react';
import { useShop } from '../../context/ShopProvider';
import './Header.css';

export default function Header() {
  const { items, handleClear } = useShop();
  return (
    <div className="header-container">
      <p className="num-items">Number of Items: {items.length}</p>
      <button className="button" onClick={handleClear}>
        Clear All
      </button>
    </div>
  );
}
