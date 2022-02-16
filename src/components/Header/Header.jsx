import React from 'react';
import { useShop } from '../../context/ShopProvider';

export default function Header() {
  const { items } = useShop();
  return (
    <div className="header-container">
      <p>Number of Items: {items.length}</p>
    </div>
  );
}
