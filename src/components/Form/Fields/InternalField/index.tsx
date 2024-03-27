import React from "react";
import { Field } from "react-final-form";

type Props = {
  label?: string;
  name?: string;
  placeholder?: string;
  rows?: string;
};

const InternalField = ({
  label = "Notes:",
  name = "internal",
  placeholder = "Notes",
  rows = "5",
}: Props) => {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        <Field
          id={name}
          name={name}
          component="textarea"
          placeholder={placeholder}
          rows={rows}
        />
      </label>
    </div>
  );
};

export default InternalField;
