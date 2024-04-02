import React, { useState } from "react";
import { Form } from "react-final-form";
import useTaggedProjects from "@/hooks/useTaggedProjects";
import Button from "@/components/Button";
import { TagField } from "@/components/Form/Fields";
import { TaggedProject } from "@/API";

type Props = {
  projectId: string;
  selected: TaggedProject[];
};

const TaggedProjectTagsField = ({ projectId, selected = [] }: Props) => {
  const [projectTags, setProjectTags] = useState<TaggedProject[]>(selected);
  const { addTaggedProject, deleteTaggedProject } = useTaggedProjects();

  const onSubmit = ({ tags }) => {
    tags.forEach((tagId) => {
      const onSuccess = (newProjectTag) => {
        // add new tags to display
        setProjectTags((currentTags) => {
          return [...currentTags, newProjectTag];
        });
      };
      addTaggedProject({ taggedProject: { projectId, tagId }, onSuccess });
    });
  };

  const onDeleteTaggedProjectSuccess = (data) => {
    console.log("onDeleteTaggedProjectSuccess", data);
    // remove deleted item from display
    setProjectTags((currentTags) => {
      const filteredTags = currentTags.filter((tag) => {
        return tag.id !== data.id;
      });
      return [...filteredTags];
    });
  };
  const existingTags = projectTags
    .sort((tag1, tag2) => tag1.tag.name.localeCompare(tag2.tag.name))
    .map((tag) => {
      return (
        <Button
          key={tag.id}
          id={tag.tag.id}
          onClick={() =>
            deleteTaggedProject({
              taggedProjectId: tag.id,
              onSuccess: onDeleteTaggedProjectSuccess,
            })
          }
        >
          {tag.tag.name}&nbsp;&nbsp;&nbsp;X
        </Button>
      );
    });

  return (
    <section>
      {existingTags}
      <Form
        onSubmit={onSubmit}
        initialValues={{ projectId }}
        render={({ handleSubmit, pristine, submitting, values }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <TagField name="tags" label="Tags" category="all" multiple />
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

export default TaggedProjectTagsField;
