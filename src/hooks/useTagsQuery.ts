import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getTags } from "../services/API";

export default function useTagsQuery() {
  return useQuery({ queryKey: ["tags"], queryFn: () => getTags() });
}
