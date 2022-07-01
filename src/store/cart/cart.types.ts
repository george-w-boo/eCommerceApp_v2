import { CategoryItem } from "../categories/categories.types";

export enum CART_ACTION_TYPES {
  TOGGLE_DROPDOWN = "cart/TOGGLE_DROPDOWN",
  SET_CART_ITEMS = "SET_CART_ITEMS",
  SET_CART_COUNT = "cart/SET_CART_COUNT",
  SET_CART_TOTAL = "cart/SET_CART_TOTAL",
}

export type CartItem = CategoryItem & {
  quantity: number;
};
