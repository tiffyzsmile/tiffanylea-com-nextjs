"use client";
import React, { useEffect, useState } from "react";
import useClients from "@/hooks/useClients";
import Link from "next/link";
import { SearchFilter } from "@/components/Form/Filters";

const AdminClients = () => {
  const [clients, setClients] = useState([]);
  const { getClients } = useClients();

  useEffect(() => {
    getClients().then(({ clients }) => {
      setClients(clients);
    });
  }, []);

  const clientsContent = (clients) =>
    clients.map((n) => {
      return (
        <tr key={n.id}>
          <td>
            <Link href={`/admin/clients/${n.id}`}>{n.name}</Link>
          </td>
          <td>
            {n.logo && (
              <img
                style={{ maxWidth: "100px", maxHeight: "100px" }}
                src={n.logo}
                alt={`Logo of ${n.name}`}
              />
            )}
          </td>
          <td className="center">
            <Link href={`/admin/clients/${n.id}`}>Edit</Link>
          </td>
        </tr>
      );
    });
  return (
    <div>
      <h1>Clients ({clients.length})</h1>
      <div style={{ float: "right" }}>
        <Link href={`/admin/clients/add`}>Add Client</Link>
      </div>
      <SearchFilter />
      {clients && (
        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Logo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{clientsContent(clients)}</tbody>
        </table>
      )}
    </div>
  );
};

export default AdminClients;
