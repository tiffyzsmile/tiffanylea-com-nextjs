import React from "react";
import { Field } from "react-final-form";
import Label from "@/components/Form/Label";

type Props = {
  name: string;
  label: string;
};

const DateField = ({ name = "date", label = "*Date:" }: Props) => {
  return (
    <div>
      <Label name={name} label={label}>
        <Field
          id={name}
          name={name}
          render={({ input }) => {
            return <input {...input} type="date" name={name} />;
          }}
        />
      </Label>
    </div>
  );
};

export default DateField;
