"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { SearchFilter } from "@/components/Form/Filters";
import { Client } from "@/API";
import ClientRow from "@/components/Admin/Clients/ClientRow";
import { getClients } from "@/data/getClients";

type ClientLocal = Omit<
  Client,
  "__typename" | "createdAt" | "updatedAt" | "projects"
>;

const AdminClients = () => {
  const [clients, setClients] = useState<ClientLocal[]>([]);
  const [filteredClients, setFilteredClients] =
    useState<ClientLocal[]>(clients);
  const [searchValue, setSearchValue] = useState<string | null>(null);

  useEffect(() => {
    getClients().then(({ clients }) => {
      setClients(clients as ClientLocal[]);
      setFilteredClients(clients as ClientLocal[]);
    });
  }, []);

  useEffect(() => {
    if (searchValue) {
      const newClients = clients.filter((client) => {
        return (
          client.name.indexOf(searchValue) >= 0 ||
          client.description?.indexOf(searchValue) >= 0 ||
          client.id.indexOf(searchValue) >= 0
        );
      });
      setFilteredClients(newClients);
    } else {
      setFilteredClients(clients);
    }
  }, [searchValue]);

  return (
    <div>
      <h1>Clients ({clients.length})</h1>
      <div style={{ float: "right" }}>
        <Link href={`/admin/clients/add`}>Add Client</Link>
      </div>
      <SearchFilter
        onChange={(newValue) => {
          setSearchValue(newValue);
        }}
      />
      {clients && (
        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Logo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client) => {
              return <ClientRow key={client.id} client={client as Client} />;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminClients;
