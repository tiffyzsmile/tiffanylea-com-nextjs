import React from "react";
import { Field } from "react-final-form";
import Label from "@/components/Form/Label";

type Props = {};

const IdField = ({}: Props) => {
  const name = "id";
  return (
    <div>
      <Label name={name} label="*ID:">
        <Field<string>
          id={name}
          name={name}
          component="input"
          placeholder="url-style-id"
        />
      </Label>
    </div>
  );
};

export default IdField;
