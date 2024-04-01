import React from "react";
import Link from "next/link";
import { Client } from "@/API";
import Image from "next/image";
import styles from "./Clients.module.css";

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
        <div className={styles.logo}>
          {client.logo && (
            <Image src={client.logo} alt={`Logo of ${client.name}`} fill />
          )}
        </div>
      </td>
      <td className="center">
        <Link href={`/admin/clients/${client.id}`}>Edit</Link>
      </td>
    </tr>
  );
};

export default ClientRow;
