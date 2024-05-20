import React from "react";
import { useCartContext } from "../contexts/useCartContext";
import { Product } from "../types/Product.types";

interface QuantitySelectorProps {
  product: Product;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ product }) => {
  const { getItemQuantity, incrementItem, decrementItem } = useCartContext();
  const cartItemQuantity = getItemQuantity(product.id);
  return (
    <div className="btn-group d-inline">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => decrementItem(product)}
      >
        -
      </button>
      <span className="btn border-primary my-0 disabled">
        {cartItemQuantity}
      </span>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => incrementItem(product)}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
