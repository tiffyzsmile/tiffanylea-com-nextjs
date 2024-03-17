import React, { useEffect, useState } from "react";
import { Field } from "react-final-form";
import useClients from "@/hooks/useClients";

const ClientField = () => {
  const [clients, setClients] = useState([]);
  const { getClients } = useClients();

  useEffect(() => {
    getClients().then(({ clients }) => {
      setClients(clients);
    });
  }, []);

  // may want to remove this completely and make it an autocomplete field
  const clientsOptionList = (clients || [])
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
