"use client";
import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import FormStyles from "@/components/Form/";
import useClients from "@/hooks/useClients";
import { useRouter } from "next/navigation";
import {
  DescriptionField,
  IdField,
  NameField,
  BooleanField,
  LogoField,
  UrlField,
  DebugField,
} from "@/components/Form/Fields";
import Button from "@/components/Button";

type Props = {
  clientId: string;
};

const AdminClient = ({ clientId }: Props) => {
  const router = useRouter();
  const [client, setClient] = useState({ id: "", name: "" });

  const { getClient, updateClient, addClient, deleteClient } = useClients();

  useEffect(() => {
    if (clientId !== "add") {
      getClient(clientId).then(({ client }) => {
        setClient(client);
      });
    } else {
      setClient({ id: "", name: "" });
    }
  }, []);

  const onSubmit = (formValues) => {
    const onSuccess = (onCompleteData) => {
      router.push(`/admin/clients/${onCompleteData.id}`);
    };

    if (clientId !== "add") {
      updateClient({ clientData: formValues, onSuccess });
    } else {
      addClient({ clientData: formValues, onSuccess });
    }
  };

  const onDelete = (clientId) => {
    deleteClient({
      clientId: clientId,
      onSuccess: () => {
        router.push(`/admin/clients`);
      },
    });
  };

  return (
    <div>
      {clientId !== "add" && (
        <div style={{ float: "right" }}>
          <Button styleAs="link" onClick={() => onDelete(clientId)}>
            Delete Client
          </Button>
        </div>
      )}
      <h1>Client Detail</h1>
      <FormStyles>
        <Form
          onSubmit={onSubmit}
          initialValues={client}
          render={({ handleSubmit, pristine, form, submitting, values }) => {
            return (
              <form onSubmit={handleSubmit}>
                <IdField />
                <NameField />
                <BooleanField label="Display?" name="display" />
                <UrlField />
                <DescriptionField />
                <div>
                  <label htmlFor="feedback">
                    Client Feedback
                    <Field
                      id="feedback"
                      name="feedback"
                      component="textarea"
                      placeholder="Client Feedback"
                    />
                  </label>
                </div>
                <LogoField folder="client-logos" />
                <div className="buttons">
                  <Button
                    onClick={() => onSubmit(values)}
                    disabled={submitting || pristine}
                  >
                    Submit
                  </Button>
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

export default AdminClient;
