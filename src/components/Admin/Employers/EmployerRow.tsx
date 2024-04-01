import React from "react";
import Link from "next/link";
import { Employer } from "@/API";
import styles from "./Employers.module.css";
import Image from "next/image";

type Props = { employer: Employer };

const EmployerRow = ({ employer }: Props) => {
  return (
    <tr key={employer.id}>
      <td>
        <Link href={`/admin/employers/${employer.id}`}>{employer.name}</Link>
      </td>
      <td>
        <div className={styles.logo}>
          {employer.logo && (
            <Image src={employer.logo} alt={`Logo of ${employer.name}`} fill />
          )}
        </div>
      </td>
      <td className="center">
        <Link href={`/admin/employers/${employer.id}`}>Edit</Link>
      </td>
    </tr>
  );
};

export default EmployerRow;
