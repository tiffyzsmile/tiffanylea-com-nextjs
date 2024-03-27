import React from "react";
import styles from "./Label.module.scss";

type Props = {
  label: string;
  name: string;
  children: React.ReactNode;
  hasError?: boolean;
};

const Label = ({ label, name, children, hasError }: Props) => {
  const errorClass = hasError ? styles.error : "";

  return (
    <label className={`${styles.label} ${errorClass}`} htmlFor={name}>
      {label}
      {children}
    </label>
  );
};

export default Label;
