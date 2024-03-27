import React from "react";
import { Field } from "react-final-form";
import Label from "@/components/Form/Label";

type Props = {};

const NameField = ({}: Props) => {
  const name = "name";
  return (
    <div>
      <Label name={name} label="*Name:">
        <Field<string>
          id={name}
          name={name}
          component="input"
          placeholder="Name"
        />
      </Label>
    </div>
  );
};

export default NameField;
