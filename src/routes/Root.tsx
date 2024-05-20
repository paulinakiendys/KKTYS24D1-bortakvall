import { Outlet } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Navbar from "../components/Navbar";
import CartContextProvider from "../contexts/CartContextProvider";

export default function Root() {
  return (
    <>
      <CartContextProvider>
        <header>
          <Navbar />
        </header>
        <main>
          <div className="container py-3">
            <Outlet />
          </div>
        </main>
      </CartContextProvider>
      <ReactQueryDevtools />
    </>
  );
}
