import React from "react";
import { useCartContext } from "../contexts/useCartContext";
import { Product } from "../types/Product.types";

interface RemoveFromCartButtonProps {
  product: Product;
}

const RemoveFromCartButton: React.FC<RemoveFromCartButtonProps> = ({
  product,
}) => {
  const { removeItem } = useCartContext();
  return (
    <button className="btn btn-danger" onClick={() => removeItem(product.id)}>
      <i className="bi bi-trash"></i>
    </button>
  );
};
export default RemoveFromCartButton;
