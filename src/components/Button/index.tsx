import React from "react";

const styles = {
  button: {
    padding: "10px 25px",
    backgroundColor: "#555",
    color: "#fff",
    fontSize: "1rem",
    margin: "5px 5px 5px 0",
  },
  link: {
    padding: "0px 5px",
    color: "#555",
    border: "none",
    textDecoration: "underline",
    fontSize: "1rem",
    margin: "5px 5px 5px 0",
  },
};

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
      style={styles[styleAs]}
      onClick={(e) => onClick(e)}
      className={className}
      type={type}
      disabled={disabled}
      id={id}
    >
      {children}
    </button>
  );
};

export default Button;
