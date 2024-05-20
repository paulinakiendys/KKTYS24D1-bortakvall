import React from "react";
import useProductsQuery from "../hooks/useProductsQuery";
import Alert from "../components/Alert";
import Spinner from "../components/Spinner";
import ProductList from "../components/ProductList";

export default function Products() {
  const { data: response, isLoading } = useProductsQuery();

  if (isLoading) return <Spinner />;

  if (response?.status === "error")
    return <Alert variant="danger" message={response.message} />;

  if (response?.status === "success")
    return <ProductList title="Alla produkter" products={response.data} />;
}
