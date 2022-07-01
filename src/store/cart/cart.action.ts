import { CART_ACTION_TYPES } from "./cart.types";
import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer";
import { CategoryItem } from "../categories/categories.types";
import { CartItem } from "./cart.types";

export const toggleCartIconDropdown = withMatcher(() =>
  createAction(CART_ACTION_TYPES.TOGGLE_DROPDOWN)
);

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

const findSameCartItemIndex = (
  item: CategoryItem,
  items: CartItem[]
): number | null => {
  const sameProductIndex = items.findIndex(
    (productInCart) => productInCart.id === item.id
  );

  if (sameProductIndex < 0) {
    return null;
  }

  return sameProductIndex;
};

export const addItemToCart = (
  cartItems: CartItem[],
  itemToAdd: CategoryItem
) => {
  const cartItemsCopy = [...cartItems];
  const sameProductIndex = findSameCartItemIndex(itemToAdd, cartItemsCopy);

  if (sameProductIndex === null) {
    cartItemsCopy.push({ ...itemToAdd, quantity: 1 });
    return setCartItems(cartItemsCopy);
  }

  cartItemsCopy[sameProductIndex].quantity += 1;

  return setCartItems(cartItemsCopy);
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  itemToRemove: CartItem
) => {
  const cartItemsCopy = [...cartItems];

  const sameProductIndex = findSameCartItemIndex(itemToRemove, cartItemsCopy);

  if (sameProductIndex) cartItemsCopy[sameProductIndex].quantity -= 1;

  return setCartItems(cartItemsCopy);
};

export const removeCartItem = (
  cartItems: CartItem[],
  productToRemove: CartItem
) => {
  const filteredItems = cartItems.filter(
    (cartItem) => cartItem.id !== productToRemove.id
  );
  return setCartItems(filteredItems);
};
