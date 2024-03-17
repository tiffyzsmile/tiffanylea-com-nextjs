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
        useEffect(() => {
          // check to be sure it is different
          // so it doesn't run on initial render
          console.log("values.category", values.category);
          onCategoryChange(values.category);
        }, [values.category]);
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="category">
              Category
              <Field
                id="category"
                name="category"
                component="select"
                type="select"
              >
                <option value={null} />
                {options}
              </Field>
            </label>
          </form>
        );
      }}
    />
  );
};

export default CategoryFilter;
