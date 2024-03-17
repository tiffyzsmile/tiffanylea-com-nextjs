import React from "react";
import { Field } from "react-final-form";
import categories from "@/data/categories";

type Props = {
  onCategoryChange?: (newCategory) => void;
};

const CategoryField = ({ onCategoryChange = (newCategory) => {} }: Props) => {
  const options = Object.keys(categories).map((categoryKey) => {
    return (
      <option key={categoryKey} value={categoryKey}>
        {categories[categoryKey]}
      </option>
    );
  });

  return (
    <label htmlFor="category">
      Category
      <Field
        id="category"
        name="category"
        render={({ input }) => {
          return (
            <select
              id="category"
              name="category"
              {...input}
              onChange={(e) => {
                input.onChange(e.target.value);
                onCategoryChange(e.target.value);
              }}
            >
              <option />
              {options}
            </select>
          );
        }}
      />
    </label>
  );
};
export default CategoryField;
