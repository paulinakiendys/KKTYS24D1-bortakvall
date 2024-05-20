import React, { ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";
import { FormValues } from "../types/Form.types";

interface FormInputProps {
  id: keyof FormValues;
  label: string;
  type: string;
  register: UseFormRegister<FormValues>;
  validationErrors: { [key: string]: string[] };
  colClass?: string;
  children?: ReactNode;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type,
  register,
  validationErrors,
  colClass = "",
  children,
}) => {
  return (
    <div className={`${colClass ? colClass + " " : ""}mb-3`}>
      <label htmlFor={id} className="form-label">
        {label} {children}
      </label>
      <input
        type={type}
        className={`form-control ${validationErrors[id] ? "is-invalid" : ""}`}
        id={id}
        {...register(id)}
      />
      {validationErrors[id] && (
        <div className="invalid-feedback">{validationErrors[id]}</div>
      )}
    </div>
  );
};

export default FormInput;
