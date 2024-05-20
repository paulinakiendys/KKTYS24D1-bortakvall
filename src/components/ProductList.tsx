import React from "react";
import { Product } from "../types/Product.types";
import ProductCard from "./ProductCard";
import Dropdown from "./Dropdown";

interface ProductListProps {
  title: string;
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, products }) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>{title}</h1>
        <Dropdown />
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
