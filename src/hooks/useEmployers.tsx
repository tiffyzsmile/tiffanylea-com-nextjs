"use client";
import * as query from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import { Amplify } from "aws-amplify";
import awsconfig from "@/aws-exports";
import { generateClient } from "aws-amplify/api";
import { Employer, UpdateEmployerMutation } from "@/API";
import { WithListsFixed } from "@/utils/awsTypeHelpers";

const getFormattedInput = (employer) => {
  // omit these fields and everything left is good
  const { createdAt, projects, updatedAt, __typename, ...employerInputFields } =
    employer;
  const formattedInput = { ...employerInputFields };

  return { ...formattedInput };
};

Amplify.configure(awsconfig);
const client = generateClient();

const useEmployers = () => {
  const getEmployer = async (employerId) => {
    const { data } = await client.graphql({
      query: query.getEmployer,
      variables: { id: employerId },
      authMode: "userPool",
    });

    const employer = data ? data.getEmployer : data;
    return { employer: employer };
  };

  const getEmployers = async () => {
    const { data } = await client.graphql({
      query: query.listEmployers,
      variables: { limit: 500 },
      authMode: "userPool",
    });
    const employers = data ? data.listEmployers.items : [];
    return { employers: employers };
  };

  const addEmployer = ({ employer, onSuccess }) => {
    client
      .graphql({
        query: mutations.createEmployer,
        variables: { input: employer },
        authMode: "userPool",
      })
      .then(({ data: { createEmployer } }) => onSuccess(createEmployer));
  };

  const deleteEmployer = ({ employerId, onSuccess }) => {
    client
      .graphql({
        query: mutations.deleteEmployer,
        variables: { input: { id: employerId } },
        authMode: "userPool",
      })
      .then(() => onSuccess(employerId));
  };

  const updateEmployer = ({
    employer,
    onSuccess,
  }: {
    employer: Employer;
    onSuccess?: (
      onSuccessData: Exclude<
        WithListsFixed<UpdateEmployerMutation["updateEmployer"]>,
        undefined | null
      >,
    ) => void;
  }) => {
    const formattedEmployer = getFormattedInput(employer);
    client
      .graphql({
        query: mutations.updateEmployer,
        variables: { input: formattedEmployer },
        authMode: "userPool",
      })
      .then(({ data: { updateEmployer } }) => onSuccess?.(updateEmployer));
  };

  return {
    getEmployer,
    getEmployers,
    addEmployer,
    deleteEmployer,
    updateEmployer,
  };
};

export default useEmployers;
