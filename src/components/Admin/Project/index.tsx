"use client";
import React, { useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import Button from "@/components/Button";
import {
  BooleanField,
  ClientField,
  DateField,
  DebugField,
  DescriptionField,
  EmployerField,
  FeaturesField,
  IdField,
  InternalField,
  LogoField,
  NameField,
  S3FileUpload,
  TaggedProjectTagsField,
  UrlField,
} from "@/components/Form/Fields";
import FormStyles from "@/components/Form/";
import arrayMutators from "final-form-arrays";
import { useRouter } from "next/navigation";
import {
  addProject,
  deleteProject,
  getProject,
  updateProject,
} from "@/utils/getProjects";
import { Project } from "@/API";

const styles = {
  gridWrapper: {
    display: "grid",
    gridTemplateColumns: "60% 40%",
  },
};

type Props = {
  projectId: string;
};

const AdminProject = ({ projectId }: Props) => {
  const router = useRouter();
  const [project, setProject] = useState<Project | {}>({
    id: "",
    name: "",
    tags: [],
  });

  useEffect(() => {
    getProject(projectId).then(({ project }) => {
      setProject(project);
    });
  }, []);

  const onSubmit = (formValues) => {
    if (projectId) {
      updateProject(formValues);
    } else {
      addProject(formValues, (onCompleteData) => {
        router.push(`/admin/projects/${onCompleteData.id}`);
      });
    }
  };

  const onDeleteSuccess = () => {
    router.push(`/admin/projects`);
  };

  return (
    <div>
      {projectId && (
        <div style={{ float: "right" }}>
          <Button
            styleAs="link"
            onClick={() => deleteProject(projectId, onDeleteSuccess)}
          >
            Delete Project
          </Button>
        </div>
      )}
      <h1>Project Details</h1>
      <div style={styles.gridWrapper}>
        <section>
          <FormStyles>
            <Form
              onSubmit={onSubmit}
              initialValues={project}
              mutators={{
                ...arrayMutators,
              }}
              render={({ handleSubmit, values }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <IdField />
                    <NameField />
                    <BooleanField label="Display?" name="display" />
                    <LogoField folder={`projects/${values.id}`} />
                    <EmployerField />
                    <ClientField />
                    <DateField />
                    <UrlField />
                    <InternalField />
                    <DescriptionField />
                    <FeaturesField name="features" />
                    <div>
                      <label htmlFor="images">
                        Screenshots
                        <Field
                          id="images"
                          name="images"
                          render={({ input }) => {
                            return (
                              <S3FileUpload
                                {...input}
                                filePath={`projects/${values.id}`}
                                multiple
                                onChange={(newValue) => {
                                  input.onChange(newValue);
                                }}
                                alt={`Screenshot of ${values.name || ""}`}
                              />
                            );
                          }}
                        />
                      </label>
                    </div>
                    <div className="buttons">
                      <Button onClick={() => onSubmit(values)}>Submit</Button>
                    </div>
                    <DebugField values={values} />
                  </form>
                );
              }}
            />
          </FormStyles>
        </section>
        {projectId && (
          <section>
            <TaggedProjectTagsField
              projectId={projectId}
              selected={project.tags.items || []}
            />
          </section>
        )}
      </div>
    </div>
  );
};

export default AdminProject;
