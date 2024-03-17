"use client";
import React, { useEffect, useState } from "react";
import { Form } from "react-final-form";
import FormStyles from "@/components/Form/";
import useTags from "@/hooks/useTags";
import Button from "@/components/Button";
import {
  BooleanField,
  CategoryField,
  DebugField,
  IdField,
  LogoField,
  NameField,
  TaggedProjectProjectsField,
} from "@/components/Form/Fields";
import { useRouter } from "next/navigation";
import { Tag } from "@/API";

const styles = {
  gridWrapper: {
    display: "grid",
    gridTemplateColumns: "60% 40%",
  },
};

type Props = {
  tagId: string;
};

const AdminTag = ({ tagId }: Props) => {
  const [tag, setTag] = useState<Tag | {}>({ id: "", name: "", projects: [] });
  const router = useRouter();

  const { getTag, addTag, updateTag, deleteTag } = useTags();

  useEffect(() => {
    if (tagId !== "add") {
      getTag(tagId).then(({ tag }) => {
        setTag(tag);
      });
    }
  }, []);

  const onSubmit = (formValues) => {
    if (tagId !== "add") {
      updateTag({
        tag: formValues,
        onSuccess: (updatedTag) => console.log("updatedTag", updatedTag),
      });
    } else {
      addTag({
        tag: formValues,
        onSuccess: (newTag) => {
          router.push(`/admin/tags/${newTag.id}`);
        },
      });
    }
  };

  const onDelete = (tagId) => {
    const onSuccess = (tagId) => {
      console.log("Tag Deleted", tagId);
      router.push(`/admin/tags`);
    };
    deleteTag({ tagId, onSuccess });
  };

  return (
    <div>
      {tagId && (
        <div style={{ float: "right" }}>
          <Button styleAs="link" onClick={() => onDelete(tagId)}>
            Delete Tag
          </Button>
        </div>
      )}
      <h1>Tag Details</h1>
      <div style={styles.gridWrapper}>
        <section>
          <FormStyles>
            <Form
              onSubmit={onSubmit}
              initialValues={tag}
              render={({
                handleSubmit,
                pristine,
                form,
                submitting,
                values,
              }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <IdField />
                    <NameField />
                    <BooleanField label="Display?" name="display" />
                    <CategoryField />
                    <LogoField folder="tag-logos" />
                    <div className="buttons">
                      <Button
                        onClick={() => onSubmit(values)}
                        disabled={submitting || pristine}
                      >
                        Submit
                      </Button>
                    </div>
                    <DebugField values={values} />
                  </form>
                );
              }}
            />
          </FormStyles>
        </section>
        <section>
          <TaggedProjectProjectsField
            tagId={tagId}
            selected={tag.projects.items || []}
          />
        </section>
      </div>
    </div>
  );
};

export default AdminTag;
