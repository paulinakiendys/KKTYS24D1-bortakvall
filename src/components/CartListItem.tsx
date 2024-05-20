import React from "react";
import useProductQuery from "../hooks/useProductQuery";
import Alert from "./Alert";
import QuantitySelector from "./QuantitySelector";
import RemoveFromCartButton from "./RemoveFromCartButton";
import { formatCurrencySEK } from "../utils/formatCurrencySEK";
import { NavLink } from "react-router-dom";
import { OrderItem } from "../types/Order.types";

interface CartListItemProps {
  item: OrderItem;
}

const CartListItem: React.FC<CartListItemProps> = ({ item }) => {
  const { data: response } = useProductQuery(item.product_id);
  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

  if (response?.status === "error") {
    return <Alert variant="danger" message={response.message} />;
  }

  if (response?.status === "success") {
    return (
      <li className="list-group-item" key={response.data.id}>
        <div className="row py-2">
          <div className="col-3 align-self-center">
            <NavLink to={`/products/${response.data.id}`}>
              <img
                src={`${IMAGE_BASE_URL}${response.data.images.thumbnail}`}
                className="img-fluid"
                alt={response.data.name}
              />
            </NavLink>
          </div>
          <div className="col d-flex flex-column gap-3">
            <NavLink to={`/products/${response.data.id}`}>
              <h6 className="my-0">{response.data.name}</h6>
            </NavLink>
            <small className="text-body-secondary">
              Pris: {formatCurrencySEK(item.item_price)}
            </small>
            <QuantitySelector product={response.data} />
          </div>
          <div className="col-3 d-flex flex-column align-items-end justify-content-between">
            <RemoveFromCartButton product={response.data} />
            <span>{item.item_total} kr</span>
          </div>
        </div>
      </li>
    );
  }
};

export default CartListItem;
