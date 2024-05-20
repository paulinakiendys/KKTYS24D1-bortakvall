import React from "react";
import FormInput from "./FormInput";
import { FormValues } from "../types/Form.types";
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

interface CheckoutFormProps {
  handleSubmit: UseFormHandleSubmit<FormValues, undefined>;
  onSubmit: SubmitHandler<FormValues>;
  register: UseFormRegister<FormValues>;
  validationErrors: {
    [key: string]: string[];
  };
  isPending: boolean;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  handleSubmit,
  onSubmit,
  register,
  validationErrors,
  isPending,
}) => {
  return (
    <div className="col-lg-8 order-lg-1">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Dina uppgifter</h5>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="row">
              <FormInput
                id="customer_first_name"
                label="Förnamn"
                type="text"
                register={register}
                validationErrors={validationErrors}
                colClass="col-6"
              />
              <FormInput
                id="customer_last_name"
                label="Efternamn"
                type="text"
                register={register}
                validationErrors={validationErrors}
                colClass="col-6"
              />
            </div>
            <FormInput
              id="customer_address"
              label="Adress"
              type="text"
              register={register}
              validationErrors={validationErrors}
            />
            <div className="row">
              <FormInput
                id="customer_postcode"
                label="Postnummer"
                type="text"
                register={register}
                validationErrors={validationErrors}
                colClass="col-6"
              />
              <FormInput
                id="customer_city"
                label="Ort"
                type="text"
                register={register}
                validationErrors={validationErrors}
                colClass="col-6"
              />
            </div>
            <FormInput
              id="customer_phone"
              label="Telefonnummer"
              type="text"
              register={register}
              validationErrors={validationErrors}
            >
              <span className="text-muted">(Valfritt)</span>
            </FormInput>
            <FormInput
              id="customer_email"
              label="E-post"
              type="text"
              register={register}
              validationErrors={validationErrors}
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isPending}
            >
              Lägg beställning
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
