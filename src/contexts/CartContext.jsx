import { createContext, useState } from 'react';

const findSameCartItemIndex = (item, items) => {
  const sameProductIndex = items.findIndex(productInCart => productInCart.id === item.id);

  if (sameProductIndex < 0) {
    return null;
  }

  return sameProductIndex;
}

export const CartContext = createContext({
  isCartOpen: false,
  toggleCartIconDropdown: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeCartItem: () => {}
});

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setProductsInCart] = useState([]);

  console.log('CartContext > cartItems', cartItems);
  
  const toggleCartIconDropdown = () => {
    setIsCartOpen(prevState => !prevState);
    console.log('isCartOpen', isCartOpen)
  }

  const addItemToCart = (itemToAdd) => {
    const sameProductIndex = findSameCartItemIndex(itemToAdd, cartItems);

    if (sameProductIndex === null) {
      setProductsInCart([...cartItems, {...itemToAdd, quantity: 1}]);

      return;
    }

    cartItems[sameProductIndex].quantity += 1;

    setProductsInCart([...cartItems]);
  }

  const removeItemFromCart = (itemToRemove) => {
    const sameProductIndex = findSameCartItemIndex(itemToRemove, cartItems);
    cartItems[sameProductIndex].quantity -= 1;

    setProductsInCart([...cartItems]);
  }

  const removeCartItem = (productToRemove) => {
    setProductsInCart(cartItems.filter(cartItem => cartItem.id !== productToRemove.id));
  }

  const value = { isCartOpen, toggleCartIconDropdown, cartItems, addItemToCart, removeItemFromCart, removeCartItem };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
};
