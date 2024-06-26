"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Employer } from "@/API";
import { SearchFilter } from "@/components/Form/Filters";
import EmployerRow from "@/components/Admin/Employers/EmployerRow";
import { getEmployers } from "@/data/getEmployers";

type Props = {};

const AdminEmployers = ({}: Props) => {
  const [employers, setEmployers] = useState<Employer[]>([]);
  const [filteredEmployers, setFilteredEmployers] =
    useState<Employer[]>(employers);
  const [searchValue, setSearchValue] = useState<string | null>(null);

  useEffect(() => {
    getEmployers().then(({ employers }: { employers: Employer[] }) => {
      if (employers) {
        setEmployers(employers);
        setFilteredEmployers(employers);
      }
    });
  }, []);

  useEffect(() => {
    if (searchValue) {
      const newEmployers = employers.filter((employer) => {
        return (
          employer.name.indexOf(searchValue) >= 0 ||
          employer.url?.indexOf(searchValue) >= 0 ||
          employer.id.indexOf(searchValue) >= 0
        );
      });
      setFilteredEmployers(newEmployers);
    } else {
      setFilteredEmployers(employers);
    }
  }, [employers, searchValue]);

  return (
    <div>
      <h1>Employers ({employers.length})</h1>
      <div style={{ float: "right" }}>
        <Link href={`/admin/employers/add`}>Add Employer</Link>
      </div>
      <SearchFilter
        onChange={(newValue) => {
          setSearchValue(newValue);
        }}
      />
      {filteredEmployers && (
        <table>
          <thead>
            <tr>
              <th>Employer</th>
              <th>Logo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployers.map((employer) => {
              return <EmployerRow key={employer.id} employer={employer} />;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminEmployers;
