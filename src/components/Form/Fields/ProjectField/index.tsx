import React, { useEffect, useState } from "react";
import { Field } from "react-final-form";
import { getProjects } from "@/utils/getProjects";
import { Project } from "@/API";

type Props = {
  label: string;
  name: string;
  multiple?: boolean;
};

const ProjectField = ({ name, label = "Projects", multiple }: Props) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then(({ projects }) => {
      setProjects(projects);
    });
  }, []);

  // may want to remove this completely and make it an autocomplete field
  const projectsOptionList = (projects || [])
    .sort((a, b) => {
      const dateA = a.date ? parseInt(a.date.replace(/-/g, ""), 10) : 0;
      const dateB = b.date ? parseInt(b.date.replace(/-/g, ""), 10) : 0;
      return dateB - dateA;
    })
    .map((project) => {
      return (
        <option key={project.id} value={project.id}>
          {project.name}
        </option>
      );
    });

  return (
    <label htmlFor={name}>
      {label}
      <Field
        id={name}
        name={name}
        component="select"
        type="select"
        multiple={multiple}
      >
        <option value={undefined} />
        {projectsOptionList}
      </Field>
    </label>
  );
};

export default ProjectField;
