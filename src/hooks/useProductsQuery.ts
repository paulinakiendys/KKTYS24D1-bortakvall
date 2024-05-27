import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/API";

export default function useProductsQuery() {
  return useQuery({ queryKey: ["products"], queryFn: getProducts });
}
