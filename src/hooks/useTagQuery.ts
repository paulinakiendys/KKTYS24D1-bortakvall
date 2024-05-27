import { useQuery } from "@tanstack/react-query";
import { getTag } from "../services/API";

export default function useTagQuery(id: number) {
  return useQuery({ queryKey: ["tag", id], queryFn: () => getTag(id) });
}
