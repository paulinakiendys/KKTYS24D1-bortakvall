import { Dispatch, SetStateAction } from "react";
import { OrderItem } from "./Order.types";
import { Product } from "./Product.types";

export type Cart = {
  order_total: number;
  order_items: OrderItem[];
};

export type CartContextType = {
  getItemQuantity: (product_id: number) => number;
  incrementItem: (product: Product) => void;
  decrementItem: (product: Product) => void;
  removeItem: (product_id: number) => void;
  cartQuantity: number;
  cartItems: OrderItem[];
  setCartItems: Dispatch<SetStateAction<OrderItem[]>>;
};
