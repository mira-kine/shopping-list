import React from 'react';
import { useShop } from '../../context/ShopProvider';
import './Header.css';
import Button from '@mui/material/Button';

export default function Header() {
  const { items, handleClear } = useShop();
  return (
    <div className="header-container">
      <p className="num-items">Number of Items: {items.length}</p>
      <Button className="button" variant="outlined" onClick={handleClear}>
        Clear All
      </Button>
    </div>
  );
}
