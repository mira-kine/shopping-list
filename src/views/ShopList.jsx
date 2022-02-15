import React from 'react';
import { useReducer } from 'react';
import AddItem from '../components/AddItem/AddItem';
import List from '../components/List/List';
//making katsu

const initialItems = [
  { id: 0, text: 'Rice', done: false },
  { id: 1, text: 'Pork tenderloin', done: false },
];

// reducer function takes state and action
// state = items
function itemsReducer(items, action) {
  switch (action.type) {
    case 'added': {
      // return new array with prev state + new object
      return [
        ...items,
        {
          id: items.length + 1,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'edited': {
      // return array of items if match id of user action select
      // payload has its own id
      // payload is whatever user is sending in - defining it in the reducer function
      return items.map((item) => (item.id === action.select.id ? action.select : item));
    }
    case 'done': {
      return items.map((item) =>
        item.id === action.select.id ? { ...item, done: !item.done } : item
      );
    }
    case 'deleted': {
      // only return the ones that don't match the payload id
      return items.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error(`Unkown action: ${action.type}`);
    }
  }
}
export default function ShopList() {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);
  console.log('items', items);
  const handleAdd = (text) => {
    dispatch({
      type: 'added',
      id: items.length + 1,
      text,
    });
  };

  const handleUpdate = (select) => {
    dispatch({
      type: 'edited',
      select,
    });
  };

  const handleDone = (selectId) => {
    dispatch({
      type: 'done',
      selectId,
    });
  };

  const handleDelete = (selectId) => {
    dispatch({
      type: 'deleted',
      selectId,
    });
  };
  return (
    <div>
      <List
        items={items}
        handleUpdate={handleUpdate}
        handleDone={handleDone}
        handleDelete={handleDelete}
      />
      <AddItem handleAdd={handleAdd} />
    </div>
  );
}
