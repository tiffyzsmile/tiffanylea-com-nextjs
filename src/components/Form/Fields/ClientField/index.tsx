import React, { useEffect, useState } from "react";
import { Field } from "react-final-form";
import { Client } from "@/API";
import { getClients } from "@/data/getClients";

type ClientLocal = Omit<
  Client,
  "__typename" | "createdAt" | "updatedAt" | "projects"
>;

const ClientField = () => {
  const [clients, setClients] = useState<ClientLocal[]>([]);

  useEffect(() => {
    getClients().then(({ clients }) => {
      setClients(clients as ClientLocal[]);
    });
  }, []);

  // may want to remove this completely and make it an autocomplete field
  const clientsOptionList = (clients || [])
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
    <div>
      <label htmlFor="client">
        *Client:
        <Field id="client" name="client.id" component="select">
          <option />
          {clientsOptionList}
        </Field>
      </label>
    </div>
  );
};

export default ClientField;
