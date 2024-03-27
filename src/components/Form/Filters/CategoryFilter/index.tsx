"use client";
import React, { useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import categories from "@/data/categories";

type Props = {
  onCategoryChange: (newCategory: string | null) => void;
};

const CategoryFilter = ({ onCategoryChange }: Props) => {
  const [currentCategory, setCurrentCategory] = useState(undefined);

  const options = Object.keys(categories).map((categoryKey) => {
    return (
      <option key={categoryKey} value={categoryKey}>
        {categories[categoryKey]}
      </option>
    );
  });

  return (
    <Form
      onSubmit={() => {
        console.log("onSubmit");
      }} // Can't be empty
      render={({ handleSubmit, values }) => {
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="category">
              Category
              <Field name="category">
                {(props) => (
                  <select
                    name={props.input.name}
                    value={props.input.value}
                    onChange={(e) => {
                      onCategoryChange(e.target.value);
                      props.input.onChange(e);
                    }}
                  >
                    <option value={undefined} />
                    {options}
                  </select>
                )}
              </Field>
            </label>
          </form>
        );
      }}
    />
  );
};

export default CategoryFilter;
