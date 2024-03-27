import React from "react";
import Link from "next/link";
import { Client } from "@/API";

type Props = {
  client: Client;
};
const ClientRow = ({ client }: Props) => {
  return (
    <tr key={client.id}>
      <td>
        <Link href={`/admin/clients/${client.id}`}>{client.name}</Link>
      </td>
      <td>
        {client.logo && (
          <img
            style={{ maxWidth: "100px", maxHeight: "100px" }}
            src={client.logo}
            alt={`Logo of ${client.name}`}
          />
        )}
      </td>
      <td className="center">
        <Link href={`/admin/clients/${client.id}`}>Edit</Link>
      </td>
    </tr>
  );
};

export default ClientRow;
