"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useEmployers from "@/hooks/useEmployers";
import { Employer } from "@/API";
import { SearchFilter } from "@/components/Form/Filters";
import EmployerRow from "@/components/Admin/Employers/EmployerRow";

type Props = {};

const AdminEmployers = ({}: Props) => {
  const [employers, setEmployers] = useState<Employer[]>([]);
  const [filteredEmployers, setFilteredEmployers] =
    useState<Employer[]>(employers);
  const [searchValue, setSearchValue] = useState<string | null>(null);

  const { getEmployers } = useEmployers();

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
        console.log(
          "employer.name.indexOf(searchValue) > 0 ",
          employer.name,
          searchValue,
          employer.name.indexOf(searchValue),
        );
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
  }, [searchValue]);

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
