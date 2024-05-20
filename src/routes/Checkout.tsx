import React, { useState } from "react";
import { DevTool } from "@hookform/devtools";
import useOrderMutation from "../hooks/useOrderMutation";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValues } from "../types/Form.types";
import { useCartContext } from "../contexts/useCartContext";
import Alert, { AlertProps } from "../components/Alert";
import CheckoutForm from "../components/CheckoutForm";
import { Cart } from "../types/Cart.types";
import CartListItem from "../components/CartListItem";

export default function Checkout() {
  const [alert, setAlert] = useState<AlertProps | null>(null);
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string[];
  }>({});
  const { cartItems, setCartItems } = useCartContext();

  const { mutateAsync, isPending } = useOrderMutation();
  const { register, control, handleSubmit, reset } = useForm<FormValues>();

  const cart: Cart = {
    order_total: cartItems.reduce((total, item) => total + item.item_total, 0),
    order_items: cartItems,
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const res = await mutateAsync({
      ...data,
      ...cart,
    });

    if (res.status === "success") {
      reset();
      setCartItems([]);

      setAlert({
        variant: "success",
        message: `Tack för din beställning! Ordernummer: ${res.data.id}`,
      });
    }

    if (res.status === "error") {
      setAlert({
        variant: "danger",
        message: res.message,
      });
    }

    if (res.status === "fail" && res.message === "Validation errors") {
      setValidationErrors(res.data);

      if (res.message === "Validation errors" && res.data.order_items) {
        setAlert({
          variant: "secondary",
          message: res.data.order_items[0],
        });
      }

      if (res.message === "Validation errors" && res.data.order_total) {
        setAlert({
          variant: "secondary",
          message: res.data.order_total[0],
        });
      }
    }
  };
  return (
    <>
      <h1>Kassa</h1>
      {alert && <Alert variant={alert.variant} message={alert.message} />}
      <div className="row">
        <div className="col-lg-4 order-lg-2 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Din order</h5>
              <>
                <ul className="list-group">
                  {cart.order_items.map((item) => (
                    <CartListItem item={item} key={item.product_id} />
                  ))}
                </ul>
                <hr />
                <p className="d-flex justify-content-between">
                  <span>Summa</span>
                  <strong>{cart.order_total} kr</strong>
                </p>
              </>
            </div>
          </div>
        </div>
        <CheckoutForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          validationErrors={validationErrors}
          isPending={isPending}
        />
      </div>
      <DevTool control={control} />
    </>
  );
}
