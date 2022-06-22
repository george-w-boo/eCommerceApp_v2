import { createContext, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  toggleCartIconDropdown: () => {},
  cartItems: [],
  addItemToCart: () => {}
});

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setProductsInCart] = useState([]);

  console.log('CartContext > cartItems', cartItems);
  
  const toggleCartIconDropdown = () => {
    setIsCartOpen(prevState => !prevState);
    console.log('isCartOpen', isCartOpen)
  }

  const addItemToCart = (productToAdd) => {
    const sameProductIndex = cartItems.findIndex(productInCart => productInCart.id === productToAdd.id);

    if (sameProductIndex < 0) {
      setProductsInCart([...cartItems, {...productToAdd, quantity: 1}]);

      return;
    }

    const updatedCart = [...cartItems];
    updatedCart[sameProductIndex].quantity += 1;

    setProductsInCart(updatedCart);
  }

  const value = { isCartOpen, toggleCartIconDropdown, cartItems, addItemToCart };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
};
