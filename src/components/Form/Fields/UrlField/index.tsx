import React from "react";
import { Field } from "react-final-form";

type Props = {
  label: string;
  name: string;
  placeholder: string;
};

const UrlField = ({
  label = "Url:",
  name = "url",
  placeholder = "https://www.google.com",
}: Props) => {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        <Field
          id={name}
          name={name}
          component="input"
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};

export default UrlField;
