"use client";
import React, { useState } from "react";
import { TaggedProject } from "@/API";
import Button from "@/components/Button";
import useTaggedProjects from "@/hooks/useTaggedProjects";
import { ProjectField, TagField } from "@/components/Form/Fields";

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
  const { deleteTaggedProject, updateTaggedProject } = useTaggedProjects();
  if (isEdit) {
    console.log("taggedProject.project.id", taggedProject.project.id);
    return (
      <tr key={taggedProject.id}>
        <td>
          <ProjectField name="project.id" />
        </td>
        <td>
          <TagField name="tag.id" multiple={false} />
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
            deleteTaggedProject(
              {
                id: taggedProject.id,
              },
              (deletedTaggedProject) =>
                console.log(
                  "DELETE ONCOMPLETE AdminTaggedProjects",
                  deletedTaggedProject,
                ),
            )
          }
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};
export default TaggedProjectRow;
