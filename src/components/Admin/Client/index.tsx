"use client";
import React, { useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import FormStyles from "@/components/Form/";
import useClients from "@/hooks/useClients";
import { useRouter } from "next/navigation";
import {
  BooleanField,
  DebugField,
  DescriptionField,
  IdField,
  LogoField,
  NameField,
  UrlField,
} from "@/components/Form/Fields";
import Button from "@/components/Button";
import { Client } from "@/API";

type Props = {
  clientId: string;
};
type ClientLocal = Omit<
  Client,
  "__typename" | "createdAt" | "updatedAt" | "projects"
>;

const AdminClient = ({ clientId }: Props) => {
  const router = useRouter();
  const [client, setClient] = useState<ClientLocal>({
    id: "",
    name: "",
  });

  const { getClient, updateClient, addClient, deleteClient } = useClients();

  useEffect(() => {
    if (clientId !== "add") {
      getClient(clientId).then(({ client }) => {
        if (client) {
          setClient(client as ClientLocal);
        }
      });
    }
  }, []);

  const onSubmit = (formValues: Client) => {
    if (clientId !== "add") {
      updateClient({ clientData: formValues });
    } else {
      const onSuccess = (onSuccessData: any) => {
        router.push(`/admin/clients/${onSuccessData.id}`);
      };
      addClient({ clientData: formValues, onSuccess });
    }
  };

  const onDelete = (clientId: string) => {
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
        <Form<Client>
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
                    <Field<string>
                      id="feedback"
                      name="feedback"
                      component="textarea"
                      placeholder="Client Feedback"
                    />
                  </label>
                </div>
                <LogoField folder="client-logos" />
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

export default AdminClient;
