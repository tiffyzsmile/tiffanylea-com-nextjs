import React, { useEffect, useState } from "react";
import { Field } from "react-final-form";
import { getProjects } from "@/data/getProjects";
import { Project } from "@/API";

type Props = {
  label: string;
  name: string;
  multiple?: boolean;
};

const ProjectField = ({ name, label = "Projects", multiple }: Props) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects({ authMode: "userPool" }).then((projects) => {
      setProjects(projects);
    });
  }, []);

  const projectsOptionList = (projects || []).map((project) => {
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
