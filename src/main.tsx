import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./assets/scss/App.scss";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

import ErrorBoundary from "./routes/ErrorBoundary.tsx";
import Products from "./routes/Products.tsx";
import Root from "./routes/Root.tsx";
import Tag from "./routes/Tag.tsx";
import Checkout from "./routes/Checkout.tsx";
import Product from "./routes/Product.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Navigate replace to="products" />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <Product />,
      },
      { path: "products/tags/:tagId", element: <Tag /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
