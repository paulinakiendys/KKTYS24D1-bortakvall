import { createContext } from "react";
import { CartContextType } from "../types/Cart.types";
import OffCanvas from "../components/OffCanvas";
import { Product } from "../types/Product.types";
import { OrderItem } from "../types/Order.types";
import useLocalStorage from "../hooks/useLocalStorage";

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: React.ReactNode;
}

const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useLocalStorage<OrderItem[]>("cart", []);

  const getItemQuantity = (product_id: number) => {
    return cartItems.find((item) => item.product_id === product_id)?.qty || 0;
  };

  const incrementItem = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product_id === product.id
      );

      if (
        existingItem &&
        product.stock_quantity !== null &&
        product.stock_quantity > existingItem.qty
      ) {
        return prevItems.map((item) =>
          item.product_id === product.id
            ? {
                ...item,
                qty: item.qty + 1,
                item_price: product.price,
                item_total: (item.qty + 1) * product.price,
              }
            : item
        );
      } else if (!existingItem) {
        return [
          ...prevItems,
          {
            product_id: product.id,
            qty: 1,
            item_price: product.price,
            item_total: product.price,
          },
        ];
      } else {
        return prevItems;
      }
    });
  };

  const decrementItem = (product: Product) => {
    setCartItems((prevItems) => {
      const item = prevItems.find((item) => item.product_id === product.id);
      if (item && item.qty > 1) {
        return prevItems.map((item) =>
          item.product_id === product.id
            ? {
                ...item,
                qty: item.qty - 1,
                item_total: (item.qty - 1) * item.item_price,
              }
            : item
        );
      } else {
        return prevItems.filter((item) => item.product_id !== product.id);
      }
    });
  };

  const removeItem = (product_id: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product_id !== product_id)
    );
  };

  const cartQuantity = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        incrementItem,
        decrementItem,
        removeItem,
        cartQuantity,
        cartItems,
        setCartItems,
      }}
    >
      {children}
      <OffCanvas />
    </CartContext.Provider>
  );
};

export default CartContextProvider;
