import { useContext, createContext } from 'react';

const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  return <ShopContext.Provider>{children}</ShopContext.Provider>;
};
