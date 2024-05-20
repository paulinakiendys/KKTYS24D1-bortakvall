import { Tag } from "./Tag.types";

export type Product = {
  id: number;
  name: string;
  description?: string;
  price: number;
  on_sale: boolean;
  images: {
    thumbnail: string;
    large: string;
  };
  stock_status: "instock" | "outofstock";
  stock_quantity: number | null;
  tags?: Tag[];
};
