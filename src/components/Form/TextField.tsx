import React from "react";
import "styles.css";

type Props = {
  id: string;
  value: string;
  onChange: () => void;
  label: string;
  type: string;
  placeholder: string;
  error: string;
  errorMessages: {};
  refProp: () => void;
};

const TextField = ({
  id,
  value = "",
  onChange = () => {},
  label,
  type = "text",
  placeholder = "",
  error = null,
  errorMessages = {},
  refProp = () => {},
}: Props) => {
  return (
    <label htmlFor={id} className={`label ${error ? "error" : ""}`}>
      {label}
      {error && <span>{errorMessages[error]}</span>}
      <input
        type={type}
        placeholder={placeholder}
        name={id}
        ref={refProp}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default TextField;
