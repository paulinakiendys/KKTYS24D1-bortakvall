import axios from "axios";
import { Product } from "../types/Product.types";
import { ResponseData } from "../types/Response.types";
import { Order, OrderData } from "../types/Order.types";
import { Tag, TagProducts } from "../types/Tag.types";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const get = async <T>(endpoint: string) => {
  const res = await instance.get<T>(endpoint);
  return res.data;
};

const post = async <Payload, Response>(endpoint: string, data: Payload) => {
  const res = await instance.post<Response>(endpoint, data);
  return res.data;
};

export const getProducts = async () => {
  return get<ResponseData<Product[]>>("/products");
};

export const getProduct = async (id: number) => {
  return get<ResponseData<Product>>(`/products/${id}`);
};

export const getTags = async () => {
  return get<ResponseData<Tag[]>>("/tags");
};

export const getTag = async (id: number) => {
  return get<ResponseData<TagProducts>>(`/tags/${id}`);
};

export const createOrder = async (data: OrderData) => {
  return post<OrderData, ResponseData<Order>>("/users/43/orders", data);
};
