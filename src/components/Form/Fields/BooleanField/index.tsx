import React from "react";
import { Field } from "react-final-form";
import Label from "@/components/Form/Label";

type Props = {
  label: string;
  name: string;
};

const BooleanField = ({ label, name }: Props) => {
  return (
    <div>
      <Label label={label} name={name}>
        <Field
          name={name}
          id={name}
          component="input"
          type="checkbox"
          style={{
            display: "inline-block",
            marginLeft: "5px",
          }}
        />
      </Label>
    </div>
  );
};

export default BooleanField;
