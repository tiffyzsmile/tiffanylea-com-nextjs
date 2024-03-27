import React from "react";
import Link from "next/link";
import { Employer } from "@/API";

type Props = { employer: Employer };

const EmployerRow = ({ employer }: Props) => {
  return (
    <tr key={employer.id}>
      <td>
        <Link href={`/admin/employers/${employer.id}`}>{employer.name}</Link>
      </td>
      <td>
        {employer.logo && (
          <img
            style={{ maxWidth: "100px", maxHeight: "100px" }}
            src={employer.logo}
            alt={`Logo of ${employer.name}`}
          />
        )}
      </td>
      <td className="center">
        <Link href={`/admin/employers/${employer.id}`}>Edit</Link>
      </td>
    </tr>
  );
};

export default EmployerRow;
