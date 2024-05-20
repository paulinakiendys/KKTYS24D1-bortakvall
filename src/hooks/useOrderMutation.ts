import React from "react";
import { useMutation } from "@tanstack/react-query";
import { createOrder } from "../services/API";
import { OrderData } from "../types/Order.types";

export default function useOrderMutation() {
  return useMutation({ mutationFn: (data: OrderData) => createOrder(data) });
}
