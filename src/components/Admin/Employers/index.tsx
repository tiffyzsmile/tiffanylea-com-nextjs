"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useEmployers from "@/hooks/useEmployers";

type Props = {};

const AdminEmployers = ({}: Props) => {
  const [employers, setEmployers] = useState([]);
  const { getEmployers } = useEmployers();

  useEffect(() => {
    getEmployers().then(({ employers }) => {
      setEmployers(employers);
    });
  }, []);

  const employersContent = employers.map((n) => {
    return (
      <tr key={n.id}>
        <td>
          <Link href={`/admin/employers/${n.id}`}>{n.name}</Link>
        </td>
        <td>
          <img
            style={{ maxWidth: "100px", maxHeight: "100px" }}
            src={n.logo}
            alt={`Logo of ${n.name}`}
          />
        </td>
        <td className="center">
          <Link href={`/admin/employers/${n.id}`}>Edit</Link>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Employers ({employers.length})</h1>
      <div style={{ float: "right" }}>
        <Link href={`/admin/employers/add`}>Add Employer</Link>
      </div>
      {employers && (
        <table>
          <thead>
            <tr>
              <th>Employer</th>
              <th>Logo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{employersContent}</tbody>
        </table>
      )}
    </div>
  );
};

export default AdminEmployers;
