import React from "react";
import { NavLink } from "react-router-dom";
import { Tag } from "../types/Tag.types";

interface ProductTagProps {
  tag: Tag;
}

const ProductTag: React.FC<ProductTagProps> = ({ tag }) => {
  return (
    <NavLink
      key={tag.id}
      to={`/products/tags/${tag.id}`}
      className={`badge rounded-pill text-bg-${
        {
          113: "primary",
          114: "warning",
          115: "success",
          124: "danger",
        }[tag.id] || "secondary"
      }`}
    >
      <span>{tag.name}</span>
    </NavLink>
  );
};

export default ProductTag;
