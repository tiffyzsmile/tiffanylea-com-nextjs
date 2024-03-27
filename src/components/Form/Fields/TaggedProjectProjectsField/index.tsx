import React, { useEffect, useState } from "react";
import { Form } from "react-final-form";
import useTaggedProjects from "@/hooks/useTaggedProjects";
import Button from "@/components/Button";
import { ProjectField } from "@/components/Form/Fields";
import { TaggedProject } from "@/API";

type Props = {
  tagId: string;
  selected: TaggedProject[] | [];
};

const TaggedProjectProjectsField = ({ tagId, selected = [] }: Props) => {
  const [taggedProjects, setTaggedProjects] = useState(selected);

  const { addTaggedProject, deleteTaggedProject } = useTaggedProjects();

  const onSubmit = ({ projects }) => {
    const onSuccess = (newTaggedProject) => {
      // add new projects to display
      setTaggedProjects((currentTaggedProjects) => {
        return [...currentTaggedProjects, newTaggedProject];
      });
    };
    projects.forEach((projectId) => {
      addTaggedProject({ taggedProject: { tagId, projectId }, onSuccess });
    });
  };

  const onDeleteTaggedProject = (taggedProjectId) => {
    const onSuccess = (deletedTaggedProject) => {
      setTaggedProjects((currentTaggedProjects) => {
        const filteredTaggedProjects = currentTaggedProjects.filter(
          (taggedProject: TaggedProject) => {
            return taggedProject.id !== taggedProjectId;
          },
        );
        return [...filteredTaggedProjects];
      });
    };
    deleteTaggedProject({ taggedProjectId: taggedProjectId, onSuccess });
  };

  useEffect(() => {
    setTaggedProjects(selected);
  }, [selected]);

  const existingProjects = taggedProjects.map(
    (taggedProject: TaggedProject) => {
      return (
        <Button
          key={taggedProject.id}
          onClick={() => onDeleteTaggedProject(taggedProject.id)}
        >
          {taggedProject.project.name}&nbsp;&nbsp;&nbsp;X
        </Button>
      );
    },
  );

  return (
    <section>
      {existingProjects}
      <Form
        onSubmit={onSubmit}
        initialValues={{ tagId }}
        render={({ handleSubmit, pristine, form, submitting, values }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <ProjectField name="projects" label="Projects" multiple />
              </div>
              <div className="buttons">
                <Button
                  onClick={() => onSubmit(values)}
                  disabled={submitting || pristine}
                >
                  Submit
                </Button>
              </div>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </form>
          );
        }}
      />
    </section>
  );
};

export default TaggedProjectProjectsField;
