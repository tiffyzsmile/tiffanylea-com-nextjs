import React from "react";
import { Field } from "react-final-form";
import Label from "@/components/Form/Label";

type Props = {
  rows?: string;
};

const DescriptionField = ({ rows = "5" }: Props) => {
  const name = "description";
  return (
    <Label name={name} label="Description:">
      <Field<string>
        id={name}
        name={name}
        component="textarea"
        placeholder="Description"
        rows={rows}
      />
    </Label>
  );
};

export default DescriptionField;
