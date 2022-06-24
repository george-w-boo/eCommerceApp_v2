import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer';

const findSameCartItemIndex = (item, items) => {
  const sameProductIndex = items.findIndex(productInCart => productInCart.id === item.id);

  if (sameProductIndex < 0) {
    return null;
  }

  return sameProductIndex;
}

export const CART_ACTION_TYPES = {
  TOGGLE_DROPDOWN: 'TOGGLE_DROPDOWN',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
}

const cartReducer = (state, action) => {
  const { type, payload } = action;
  // console.log('cartReducer > action', action);

  switch(type) {
    case CART_ACTION_TYPES.TOGGLE_DROPDOWN:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      }
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      }
      default:
        throw new Error(`Unhandled type ${type} in userReducer`);
  }
}

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
}

export const CartContext = createContext({
  isCartOpen: false,
  toggleCartIconDropdown: () => {},
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeCartItem: () => {},
  calcCartItemsTotalPrice: () => {}
});

export const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { isCartOpen, cartItems, cartCount, cartTotal } = state;

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
    const newCartTotal = newCartItems.reduce((totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity, 0);

    dispatch(createAction(
      CART_ACTION_TYPES.SET_CART_ITEMS,
      {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal
      }
    ));
  }
  
  const toggleCartIconDropdown = () => {
    dispatch(createAction(CART_ACTION_TYPES.TOGGLE_DROPDOWN))
  }

  const addItemToCart = (itemToAdd) => {
    // console.log('addItemToCart triggered');
    const cartItemsCopy = [...cartItems];

    const sameProductIndex = findSameCartItemIndex(itemToAdd, cartItemsCopy);

    if (sameProductIndex === null) {
      cartItemsCopy.push({...itemToAdd, quantity: 1})
      updateCartItemsReducer(cartItemsCopy);

      return;
    }

    cartItemsCopy[sameProductIndex].quantity += 1;

    // console.log('addItemToCart > cartItemsCopy', cartItemsCopy);
    updateCartItemsReducer(cartItemsCopy);
  }

  const removeItemFromCart = (itemToRemove) => {
    const cartItemsCopy = [...cartItems];

    const sameProductIndex = findSameCartItemIndex(itemToRemove, cartItemsCopy);
    cartItemsCopy[sameProductIndex].quantity -= 1;

    updateCartItemsReducer([...cartItemsCopy]);
  }

  const removeCartItem = (productToRemove) => {
    const cartItemsCopy = [...cartItems];
    updateCartItemsReducer(cartItemsCopy.filter(cartItem => cartItem.id !== productToRemove.id));
  }

  const value = {
    isCartOpen,
    toggleCartIconDropdown,
    cartItems,
    cartCount,
    cartTotal,
    addItemToCart,
    removeItemFromCart,
    removeCartItem,
  };

  // console.log('CartContext > cartItems', cartItems);
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
};
