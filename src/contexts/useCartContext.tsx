import { useContext } from "react";
import { CartContext } from "./CartContextProvider";

export const useCartContext = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("Trying to use Cart Context outside of provider");
  }
  return cartContext;
};
