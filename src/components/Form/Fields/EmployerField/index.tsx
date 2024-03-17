"use client";
import React, { useEffect, useState } from "react";
import { Field } from "react-final-form";
import useEmployers from "@/hooks/useEmployers";

type Props = {};

const EmployerField = ({}: Props) => {
  const [employers, setEmployers] = useState([]);
  const { getEmployers } = useEmployers();

  useEffect(() => {
    getEmployers().then(({ employers }) => {
      setEmployers(employers);
    });
  }, []);

  // may want to remove this completely and make it an autocomplete field
  const employersOptionList = employers
    // Sort list alphabetically by name
    .sort((a, b) => (a.name < b.name ? -1 : Number(a.name > b.name)))
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
