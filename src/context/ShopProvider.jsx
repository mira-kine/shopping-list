import { useContext, createContext, useReducer } from 'react';

const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const initialItems = [
    { id: 0, text: 'Rice', done: false },
    { id: 1, text: 'Pork tenderloin', done: false },
  ];
  function itemsReducer(items, { type, select, text, id }) {
    switch (type) {
      case 'added': {
        return [
          ...items,
          {
            id: items.length + 1,
            text: text,
            done: false,
          },
        ];
      }
      case 'edited': {
        return items.map((item) => (item.id === select.id ? select : item));
      }
      case 'done': {
        return items.map((item) => (item.id === id ? { ...item, done: !item.done } : item));
      }
      case 'deleted': {
        return items.filter((item) => item.id !== id);
      }
      default: {
        throw Error(`Unkown action: ${type}`);
      }
    }
  }
  const [items, dispatch] = useReducer(itemsReducer, initialItems);
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
      id: selectId,
    });
  };

  const handleDelete = (selectId) => {
    dispatch({
      type: 'deleted',
      id: selectId,
    });
  };
  return (
    <ShopContext.Provider value={{ items, handleAdd, handleUpdate, handleDone, handleDelete }}>
      {children}
    </ShopContext.Provider>
  );
};

const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error('useShop must be defined within a ShopContext Provider');
  }
  return context;
};

export { ShopProvider, useShop };
