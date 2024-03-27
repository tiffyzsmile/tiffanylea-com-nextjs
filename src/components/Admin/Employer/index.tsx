"use client";
import React, { useEffect, useState } from "react";
import { Form } from "react-final-form";
import FormStyles from "@/components/Form/";
import useEmployers from "@/hooks/useEmployers";
import Button from "@/components/Button";
import {
  DateField,
  DebugField,
  IdField,
  LogoField,
} from "@/components/Form/Fields";
import NameField from "../../Form/Fields/NameField";
import { useRouter } from "next/navigation";
import { Employer } from "@/API";

type EmployerLocal = Omit<
  Employer,
  "__typename" | "createdAt" | "updatedAt" | "projects"
>;

type Props = {
  employerId: string;
};

const AdminEmployer = ({ employerId }: Props) => {
  const router = useRouter();
  const [employer, setEmployer] = useState<EmployerLocal>({ id: "", name: "" });
  const { getEmployer, updateEmployer, addEmployer, deleteEmployer } =
    useEmployers();

  useEffect(() => {
    if (employerId !== "add") {
      getEmployer(employerId).then(({ employer }) => {
        if (employer) {
          setEmployer(employer as EmployerLocal);
        }
      });
    }
  }, []);

  const onSubmit = (formValues: Employer) => {
    const onSuccess = (employer) => {
      router.push(`/admin/employers/${employer.id}`);
    };

    if (employerId !== "add") {
      updateEmployer({ employer: formValues, onSuccess });
    } else {
      addEmployer({ employer: formValues, onSuccess });
    }
  };

  const onDelete = (employerId) => {
    deleteEmployer({
      employerId: employerId,
      onSuccess: () => {
        router.push(`/admin/employers`);
      },
    });
  };

  return (
    <div>
      {employerId !== "add" && (
        <div style={{ float: "right" }}>
          <Button styleAs="link" onClick={() => onDelete(employer.id)}>
            Delete Employer
          </Button>
        </div>
      )}
      <h1>Employer Detail</h1>

      <FormStyles>
        <Form
          onSubmit={onSubmit}
          initialValues={employer}
          render={({ handleSubmit, values }) => {
            return (
              <form onSubmit={handleSubmit}>
                <IdField />
                <NameField />
                <LogoField folder={`employer-logos/${values.id}`} />
                <DateField name="startdate" label="Start Date: " />
                <DateField name="enddate" label="End Date: " />
                <div className="buttons">
                  <Button onClick={() => onSubmit(values)}>Submit</Button>
                </div>
                <DebugField values={values} />
              </form>
            );
          }}
        />
      </FormStyles>
    </div>
  );
};

export default AdminEmployer;
