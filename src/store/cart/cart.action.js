import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer";

export const toggleCartIconDropdown = () =>
  createAction(CART_ACTION_TYPES.TOGGLE_DROPDOWN);

const findSameCartItemIndex = (item, items) => {
  console.log("items", items);
  const sameProductIndex = items.findIndex(
    (productInCart) => productInCart.id === item.id
  );

  if (sameProductIndex < 0) {
    return null;
  }

  return sameProductIndex;
};

export const addItemToCart = (cartItems, itemToAdd) => {
  const cartItemsCopy = [...cartItems];
  const sameProductIndex = findSameCartItemIndex(itemToAdd, cartItemsCopy);

  if (sameProductIndex === null) {
    cartItemsCopy.push({ ...itemToAdd, quantity: 1 });
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItemsCopy);
  }

  cartItemsCopy[sameProductIndex].quantity += 1;

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItemsCopy);
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const cartItemsCopy = [...cartItems];

  const sameProductIndex = findSameCartItemIndex(itemToRemove, cartItemsCopy);
  cartItemsCopy[sameProductIndex].quantity -= 1;

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItemsCopy);
};

export const removeCartItem = (cartItems, productToRemove) => {
  const filteredItems = cartItems.filter(
    (cartItem) => cartItem.id !== productToRemove.id
  );
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, filteredItems);
};
