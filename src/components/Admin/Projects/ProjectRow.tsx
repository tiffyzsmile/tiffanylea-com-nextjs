import React from "react";
import Link from "next/link";
import { Project } from "@/API";
import styles from "./Projects.module.css";
import Image from "next/image";

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
        <div className={styles.logo}>
          {project.logo && (
            <Image src={project.logo} alt={`Logo of ${project.name}`} fill />
          )}
        </div>
      </td>
      <td className="center">
        <Link href={`/admin/projects/${project.id}`}>Edit</Link>
      </td>
    </tr>
  );
};

export default ProjectRow;
