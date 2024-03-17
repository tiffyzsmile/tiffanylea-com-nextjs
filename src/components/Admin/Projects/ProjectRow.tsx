import React from "react";
import Link from "next/link";
import { Project } from "@/API";

type Props = {
  project: Project;
};

const ProjectRow = ({ project }: Props) => {
  return (
    <tr key={project.id}>
      <td>
        <Link href={`/admin/projects/${project.id}`}>{project.name}</Link>
      </td>
      <td>{project.date}</td>
      <td>
        {project.logo && (
          <img
            style={{ maxWidth: "100px", maxHeight: "100px" }}
            src={project.logo}
            alt={`Logo of ${project.name}`}
          />
        )}
      </td>
      <td className="center">
        <Link href={`/admin/projects/${project.id}`}>Edit</Link>
      </td>
    </tr>
  );
};

export default ProjectRow;
