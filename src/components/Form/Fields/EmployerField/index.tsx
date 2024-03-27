"use client";
import React, { useEffect, useState } from "react";
import { Field } from "react-final-form";
import useEmployers from "@/hooks/useEmployers";
import { Employer } from "@/API";

type Props = {};

type EmployerLocal = Omit<
  Employer,
  "__typename" | "createdAt" | "updatedAt" | "projects"
>;

const EmployerField = ({}: Props) => {
  const [employers, setEmployers] = useState<EmployerLocal[]>([]);
  const { getEmployers } = useEmployers();

  useEffect(() => {
    getEmployers().then(({ employers }) => {
      setEmployers(employers);
    });
  }, []);

  // may want to remove this completely and make it an autocomplete field
  const employersOptionList = employers
    // Sort list alphabetically by name
    .sort((a, b) => {
      const aName = a.name ? a.name : "a";
      const bName = b.name ? b.name : "b";
      return aName < bName ? -1 : Number(aName > bName);
    })
    .map((e) => {
      return (
        <option key={e.id} value={e.id}>
          {e.name}
        </option>
      );
    });

  return (
    <label htmlFor="employer">
      Employer
      <Field id="employer" name="employer.id" component="select">
        <option value={undefined} />
        {employersOptionList}
      </Field>
    </label>
  );
};

export default EmployerField;
