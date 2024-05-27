import { NavLink } from "react-router-dom";
import { useCartContext } from "../contexts/useCartContext";

export default function Navbar() {
  const { cartQuantity } = useCartContext();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
      <div className="container">
        <NavLink className="navbar-brand" to={""}>
          Bortakväll
        </NavLink>
        <button
          className="btn btn-primary position-relative"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasCart"
          aria-controls="offcanvasCart"
        >
          <i className="bi bi-cart"></i>
          {cartQuantity > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartQuantity}
              <span className="visually-hidden">cart items</span>
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
