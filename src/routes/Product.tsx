import React from "react";
import { useParams } from "react-router-dom";
import useProductQuery from "../hooks/useProductQuery";
import Alert from "../components/Alert";
import ProductDetail from "../components/ProductDetail";
import Spinner from "../components/Spinner";

export default function Product() {
  const params = useParams<{ productId: string }>();
  const { data: response, isLoading } = useProductQuery(
    Number(params.productId)
  );

  if (isLoading) return <Spinner />;

  if (response?.status === "error") {
    return <Alert variant="danger" message={response.message} />;
  }

  if (response?.status === "success") {
    return <ProductDetail product={response.data} />;
  }
}
