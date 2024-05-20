import React from "react";
import { Product } from "../types/Product.types";
import QuantitySelector from "./QuantitySelector";
import { useCartContext } from "../contexts/useCartContext";

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { getItemQuantity, incrementItem } = useCartContext();
  const cartItemQuantity = getItemQuantity(product.id);

  const isProductInStock = product.stock_status === "instock";
  const buttonClass = isProductInStock ? "btn-warning" : "btn-secondary";
  const buttonText = isProductInStock
    ? "Lägg till i varukorgen"
    : "Slut i lager";
  const isButtonDisabled = !isProductInStock;

  if (cartItemQuantity > 0) {
    return <QuantitySelector product={product} />;
  }

  return (
    <button
      type="button"
      className={`btn d-block ${buttonClass}`}
      disabled={isButtonDisabled}
      onClick={() => incrementItem(product)}
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasCart"
    >
      {buttonText}
    </button>
  );
};

export default AddToCartButton;
