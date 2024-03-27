"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { SearchFilter } from "@/components/Form/Filters";
import ProjectRow from "@/components/Admin/Projects/ProjectRow";
import { getProjects } from "@/utils/getProjects";
import { Project } from "@/API";

type Props = {};

const AdminProjects = ({}: Props) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [searchValue, setSearchValue] = useState<string | null>(null);

  useEffect(() => {
    getProjects().then(({ projects }) => {
      if (projects) {
        setProjects(projects);
        setFilteredProjects(projects);
      }
    });
  }, []);

  useEffect(() => {
    if (searchValue) {
      const newProjects = projects.filter((project) => {
        return (
          project.name.indexOf(searchValue) >= 0 ||
          project.description?.indexOf(searchValue) >= 0 ||
          project.id.indexOf(searchValue) >= 0 ||
          JSON.stringify(project.features).indexOf(searchValue) >= 0
        );
      });
      setFilteredProjects(newProjects);
    } else {
      setFilteredProjects(projects);
    }
  }, [searchValue]);

  return (
    <div>
      <h1>Projects ({filteredProjects.length})</h1>
      <div style={{ float: "right" }}>
        <Link href={`/admin/projects/add`}>Add Project</Link>
      </div>
      <SearchFilter
        onChange={(newValue) => {
          setSearchValue(newValue);
        }}
      />

      {projects && (
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Date</th>
              <th>Logo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project) => {
              return <ProjectRow key={project.id} project={project} />;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminProjects;
