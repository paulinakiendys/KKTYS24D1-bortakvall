import { Product } from "./Product.types";

export type Tag = {
  id: number;
  name: string;
  slug: string;
};

export type TagProducts = Tag & {
  products: Product[];
};
