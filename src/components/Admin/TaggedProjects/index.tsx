"use client";
import React, { useEffect, useState } from "react";
import useTaggedProjects from "@/hooks/useTaggedProjects";
import TaggedProjectRow from "@/components/Admin/TaggedProjects/TaggedProjectRow";
import { Form } from "react-final-form";
import { TaggedProject } from "@/API";

type Props = {};

const AdminTaggedProjects = ({}: Props) => {
  const [taggedProjectValues, setTaggedProjectValues] =
    useState<TaggedProject>();
  const [taggedProjects, setTaggedProjects] = useState<TaggedProject[]>([]);
  const [nextToken, setNextToken] = useState(1);
  const [idToEdit, setIdToEdit] = useState(null);
  const { getTaggedProjects, deleteTaggedProject, updateTaggedProject } =
    useTaggedProjects();

  useEffect(() => {
    getTaggedProjects({}).then(({ taggedProjects }) => {
      setTaggedProjects(taggedProjects as TaggedProject[]);
    });
  }, []);
  // useEffect(() => {
  //   if (nextToken) {
  //     getTaggedProjects({ nextToken: nextToken === 1 ? null : nextToken }).then(
  //       ({ taggedProjects, nextNextToken }) => {
  //         if (nextToken === 1) {
  //           setTaggedProjects(taggedProjects);
  //         } else {
  //           // don't want it to keep adding same ones if we already have
  //           setTaggedProjects((currentTaggedProjects) => {
  //             return [...currentTaggedProjects, ...taggedProjects];
  //           });
  //         }
  //         if (nextNextToken) {
  //           setNextToken(nextNextToken);
  //         }
  //       },
  //     );
  //   }
  // }, [nextToken]);

  const onSubmit = () => {
    const {
      id,
      project: { id: projectId },
      tag: { id: tagId },
    } = taggedProjectValues;
    const onUpdateSuccess = (updatedTaggedProject) =>
      console.log("AdminTaggedProjects onUpdateSuccess", updatedTaggedProject);
    updateTaggedProject({
      taggedProject: { id, tagId, projectId },
      onSuccess: onUpdateSuccess,
    });
    setIdToEdit(null);
  };

  return (
    <div>
      <h1>Tagged Projects ({taggedProjects.length})</h1>
      <p>
        This page is just for reference and debugging purposes. Most updates
        should be made directly in the project edit screen.
      </p>

      {taggedProjects && (
        <Form
          onSubmit={onSubmit}
          initialValues={
            taggedProjects.filter(
              (taggedProject) => taggedProject.id === idToEdit,
            )[0]
          }
          render={({ handleSubmit, form, values }) => {
            setTaggedProjectValues(values as TaggedProject);

            return (
              <form onSubmit={handleSubmit}>
                <table>
                  <thead>
                    <tr>
                      <th>Project</th>
                      <th>Tag</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taggedProjects.map((taggedProject) => {
                      return (
                        <TaggedProjectRow
                          key={taggedProject.id}
                          taggedProject={taggedProject}
                          onSubmit={onSubmit}
                          onEdit={(idToEdit) => setIdToEdit(idToEdit)}
                          isEdit={taggedProject.id === idToEdit}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </form>
            );
          }}
        />
      )}
    </div>
  );
};
export default AdminTaggedProjects;
