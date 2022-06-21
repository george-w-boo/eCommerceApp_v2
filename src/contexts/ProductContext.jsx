import { createContext, useState } from 'react';
import { SHOP_DATA } from '../shop-data';

export const ProductsContext = createContext({
  currentProducts: [],
});

export const ProductsProvider = ({children}) => {
  const [currentProducts, setCurrentProducts] = useState(SHOP_DATA);
  const value = { currentProducts, setCurrentProducts }

  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  )
};
