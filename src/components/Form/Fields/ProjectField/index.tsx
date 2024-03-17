import React, { useEffect, useState } from "react";
import { Field } from "react-final-form";
import { getProjects } from "@/utils/getProjects";

type Props = {
  label: string;
  name: string;
  multiple: boolean;
};

const ProjectField = ({ name, label = "Projects", multiple }: Props) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(({ projects }) => {
      setProjects(projects);
    });
  }, []);

  // may want to remove this completely and make it an autocomplete field
  const projectsOptionList = (projects || [])
    // Sort list alphabetically by name
    .sort((a, b) => (a.name < b.name ? -1 : Number(a.name > b.name)))
    .map((e) => {
      return (
        <option key={e.id} value={e.id}>
          {e.name}
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
