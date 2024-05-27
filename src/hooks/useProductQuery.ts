import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../services/API";

export default function useProductQuery(id: number) {
  return useQuery({ queryKey: ["product", id], queryFn: () => getProduct(id) });
}
