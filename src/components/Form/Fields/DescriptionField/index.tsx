import React from "react";
import { Field } from "react-final-form";
import Label from "@/components/Form/Label";

type Props = {
  label: string;
  name: string;
  placeholder?: string;
  rows?: string;
};

const DescriptionField = ({
  label = "Description:",
  name = "description",
  placeholder = "Description",
  rows = "5",
}: Props) => {
  return (
    <div>
      <Label name={name} label={label}>
        <Field
          id={name}
          name={name}
          component="textarea"
          placeholder={placeholder}
          rows={rows}
        />
      </Label>
    </div>
  );
};

export default DescriptionField;
