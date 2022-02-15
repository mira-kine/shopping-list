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
      // return array of items if match id
      return items.map((item) => {
        if (item.id !== action.toGet.id) {
          return item;
        }
        return action.toGet;
      });
    }
    case 'deleted': {
      return items.find((item) => item.id === action.id);
    }
    default: {
      throw Error(`Unkown action: ${action.type}`);
    }
  }
}
export default function ShopList() {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  const handleAdd = (text) => {
    dispatch({
      type: 'added',
      id: items.length + 1,
      text,
    });
  };

  const handleUpdate = (toGet) => {
    dispatch({
      type: 'edited',
      toGet,
    });
  };

  return (
    <div>
      <List items={items} handleUpdate={handleUpdate} />
      <AddItem handleAdd={handleAdd} />
    </div>
  );
}
