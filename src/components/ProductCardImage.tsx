import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Product } from "../types/Product.types";
import ProductTag from "./ProductTag";

interface ProductCardImageProps {
  product: Product;
}

const ProductCardImage: React.FC<ProductCardImageProps> = ({ product }) => {
  const location = useLocation();
  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;
  return (
    <>
      <img
        src={`${IMAGE_BASE_URL}${product.images.thumbnail}`}
        className="card-img-top position-relative"
        alt={product.name}
      />
      <div className="d-flex flex-column gap-2 position-absolute top-0 start-0 m-3">
        {product.tags?.map((tag) => (
          <ProductTag key={tag.id} tag={tag} />
        ))}
      </div>
      <NavLink
        type="button"
        className="btn btn-info position-absolute top-0 end-0 m-3"
        to={
          location.pathname.startsWith("/products/tags")
            ? `/products/${product.id}`
            : `${product.id}`
        }
      >
        <i className="bi bi-info-circle"></i>
      </NavLink>
    </>
  );
};

export default ProductCardImage;
