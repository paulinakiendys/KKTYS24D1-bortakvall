import React from "react";
import { Product } from "../types/Product.types";
import ProductCardImage from "./ProductCardImage";
import { formatCurrencySEK } from "../utils/formatCurrencySEK";
import AddToCartButton from "./AddToCartButton";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <ProductCardImage product={product} />
        <div className="card-body d-flex flex-column justify-content-between align-items-center">
          <div className="text-center">
            <h5 className="card-title fw-semibold">{product.name}</h5>
            <p className="card-text mb-3">{formatCurrencySEK(product.price)}</p>
          </div>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
