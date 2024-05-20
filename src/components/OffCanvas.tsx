import { useCartContext } from "../contexts/useCartContext";
import useProductsQuery from "../hooks/useProductsQuery";
import Alert from "./Alert";
import { NavLink } from "react-router-dom";
import CartListItem from "./CartListItem";

export default function OffCanvas() {
  const { cartQuantity, cartItems } = useCartContext();
  const { data: response } = useProductsQuery();

  if (response?.status === "error") {
    <Alert variant="danger" message={response.message} />;
  }

  if (response?.status === "success")
    return (
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasCart"
        aria-labelledby="offcanvasCartLabel"
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title d-flex align-items-center gap-3"
            id="offcanvasCartLabel"
          >
            <span>Varukorg</span>
            {cartQuantity > 0 && (
              <span className="badge bg-danger rounded-pill">
                {cartQuantity}
              </span>
            )}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-group">
            {cartItems.map((item) => (
              <CartListItem key={item.product_id} item={item} />
            ))}
          </ul>
          {cartQuantity > 0 && (
            <>
              <hr />
              <p className="d-flex justify-content-between">
                <span>Summa</span>
                <strong>
                  {cartItems.reduce((sum, item) => sum + item.item_total, 0)} kr
                </strong>
              </p>
            </>
          )}
          {cartQuantity === 0 && <p>Inga produkter i varukorgen.</p>}
          <hr />
          <NavLink
            to={cartItems.length > 0 ? "/checkout" : "/products"}
            className="btn btn-success d-block"
          >
            {cartItems.length > 0 ? "Gå till kassan" : "Gå till produkter"}
          </NavLink>
        </div>
      </div>
    );
}
