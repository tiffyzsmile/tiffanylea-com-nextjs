import React from "react";
import { Field } from "react-final-form";
import Label from "@/components/Form/Label";

type Props = {
  label: string;
  name: string;
  placeholder: string;
};

const NameField = ({
  label = "*Name:",
  name = "name",
  placeholder = "Name",
}: Props) => {
  return (
    <div>
      <Label name={name} label={label}>
        <Field
          id={name}
          name={name}
          component="input"
          placeholder={placeholder}
        />
      </Label>
    </div>
  );
};

export default NameField;
