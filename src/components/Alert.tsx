import { ReactNode } from "react";
import Button from "./Buttons";
interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary  alert-dismissible" role="alert">
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
      {children}
    </div>
  );
};

export default Alert;
