import { FormValues } from "./Form.types";

export type Order = {
  id: number;
  user_id: number;
  order_date: string;
  customer_first_name: string;
  customer_last_name: string;
  customer_address: string;
  customer_postcode: string;
  customer_city: string;
  customer_email: string;
  customer_phone: string | null;
  order_total: number;
  created_at: string;
  updated_at: string;
  items: Item[];
};

export type Item = OrderItem & {
  id: number;
  order_id: number;
};

export type OrderItem = {
  product_id: number;
  qty: number;
  item_price: number;
  item_total: number;
};

export type OrderData = FormValues & {
  order_total: number;
  order_items: OrderItem[];
};
