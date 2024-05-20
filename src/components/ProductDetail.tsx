import React from "react";
import { Product } from "../types/Product.types";
import { formatCurrencySEK } from "../utils/formatCurrencySEK";
import { sanitizeHTML } from "../utils/sanitizeHTML";
import AddToCartButton from "./AddToCartButton";
import ProductTag from "./ProductTag";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`${IMAGE_BASE_URL}${product.images.large}`}
            className="img-fluid rounded-start"
            alt={product.name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="d-flex gap-1 mb-3">
              {product.tags?.map((tag) => (
                <ProductTag key={tag.id} tag={tag} />
              ))}
            </div>
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{formatCurrencySEK(product.price)}</p>
            {product.description && (
              <div
                dangerouslySetInnerHTML={sanitizeHTML(product.description)}
              />
            )}
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
