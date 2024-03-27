import React from "react";
import { Field } from "react-final-form";
import Label from "@/components/Form/Label";

type Props = {};

const UrlField = ({}: Props) => {
  const name = "url";
  return (
    <div>
      <Label name={name} label="Url:">
        <Field<string>
          id={name}
          name={name}
          component="input"
          placeholder="https://www.google.com"
        />
      </Label>
    </div>
  );
};

export default UrlField;
