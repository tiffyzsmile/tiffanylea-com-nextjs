"use client";
import React from "react";
import { TaggedProject } from "@/API";
import Button from "@/components/Button";
import { ProjectField, TagField } from "@/components/Form/Fields";
import { deleteTaggedProject } from "@/data/getTaggedProjects";

type Props = {
  taggedProject: TaggedProject;
  onSubmit: () => void;
  onEdit: (idToEdit) => void;
  isEdit: boolean;
};

const TaggedProjectRow = ({
  taggedProject,
  onSubmit,
  onEdit,
  isEdit,
}: Props) => {
  if (isEdit) {
    return (
      <tr key={taggedProject.id}>
        <td>
          <ProjectField name="project.id" label="Project" />
        </td>
        <td>
          <TagField name="tag.id" />
        </td>
        <td className="center">
          <div className="buttons">
            <Button onClick={() => onSubmit()}>Submit</Button>
          </div>
        </td>
      </tr>
    );
  }
  return (
    <tr key={taggedProject.id}>
      <td>{taggedProject.project.name}</td>
      <td>{taggedProject.tag.name}</td>
      <td className="center">
        <Button
          styleAs="link"
          onClick={() => {
            onEdit(taggedProject.id);
          }}
        >
          Edit
        </Button>
        <Button
          styleAs="link"
          onClick={() =>
            deleteTaggedProject({
              taggedProjectId: taggedProject.id,
              onSuccess: (deletedTaggedProject) =>
                console.log(
                  "DELETE ONCOMPLETE AdminTaggedProjects",
                  deletedTaggedProject,
                ),
            })
          }
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};
export default TaggedProjectRow;
