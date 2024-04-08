import React from "react";
import styles from "./Button.module.css";

type Props = {
  className?: string;
  styleAs?: string;
  onClick: (event) => void;
  disabled?: boolean;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  id?: string;
};

const Button = ({
  className = "",
  styleAs = "button",
  onClick,
  disabled = false,
  children,
  type = "button",
  id,
}: Props) => {
  return (
    <button
      className={`${className} ${styles[styleAs]}`}
      onClick={(e) => onClick(e)}
      type={type}
      disabled={disabled}
      id={id}
    >
      {children}
    </button>
  );
};

export default Button;
