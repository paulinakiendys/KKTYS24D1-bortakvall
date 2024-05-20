import React from "react";

export interface AlertProps {
  variant: string;
  message: string;
}

const Alert: React.FC<AlertProps> = ({ variant, message }) => {
  return (
    <div className={`alert alert-${variant}`} role="alert">
      {message}
    </div>
  );
};

export default Alert;
