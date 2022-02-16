import React from 'react';
import AddItem from '../components/AddItem/AddItem';
import List from '../components/List/List';
import Header from '../components/Header/Header';

export default function ShopList() {
  return (
    <>
      <Header />
      <div className="main-container">
        <List />
        <AddItem />
      </div>
    </>
  );
}
