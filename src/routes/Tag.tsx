import React from "react";
import { useParams } from "react-router-dom";
import useTagQuery from "../hooks/useTagQuery";
import Alert from "../components/Alert";
import Spinner from "../components/Spinner";
import ProductList from "../components/ProductList";

export default function Tag() {
  const params = useParams<{ tagId: string }>();
  const { data: response, isLoading } = useTagQuery(Number(params.tagId));

  if (isLoading) return <Spinner />;

  if (response?.status === "error")
    return <Alert variant="danger" message={response.message} />;

  if (response?.status === "success")
    return (
      <ProductList
        title={response.data.name}
        products={response.data.products}
      />
    );
}
