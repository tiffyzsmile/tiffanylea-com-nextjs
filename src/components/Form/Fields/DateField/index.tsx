import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field } from "react-final-form";

type Props = {
  name: string;
  label: string;
  showMonthDropdown: boolean;
  showYearDropdown: boolean;
  dropdownMode: "scroll" | "select" | undefined;
  dateFormat: string;
};

const DateField = ({
  name = "date",
  label = "*Date:",
  showMonthDropdown = true,
  showYearDropdown = true,
  dropdownMode = "select",
  dateFormat = "yyyy-MM-dd",
}: Props) => {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        <Field
          id={name}
          name={name}
          render={({ input }) => {
            const selected =
              input.value === "" ? new Date() : new Date(input.value);

            return (
              <ReactDatePicker
                {...input}
                selected={selected}
                dateFormat={dateFormat}
                showMonthDropdown={showMonthDropdown}
                showYearDropdown={showYearDropdown}
                dropdownMode={dropdownMode}
                style={{ display: "block" }}
              />
            );
          }}
        />
      </label>
    </div>
  );
};

export default DateField;
