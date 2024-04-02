import * as query from "@/graphql/queries";
import { formatJsonFromAws } from "@/helpers/forms";
import { generateClient } from "aws-amplify/api";
import * as mutations from "@/graphql/mutations";

import { Amplify } from "aws-amplify";
import awsconfig from "@/aws-exports";
import { UpdateProjectInput } from "@/API";

// when we do serverside rendering for public website
// Amplify.configure(awsconfig, { ssr: true }); // also set     authMode: "iam",
Amplify.configure(awsconfig);
const client = generateClient();

const getProject = async (projectId) => {
  const { data } = await client.graphql({
    query: query.getProject,
    variables: { id: projectId },
    authMode: "iam",
  });

  const project = data ? data.getProject : null;

  return { project: project };
};

const getProjects = async () => {
  const { data } = await client.graphql({
    query: query.listProjects,
    variables: { limit: 500 },
    authMode: "iam",
  });

  const projects = data ? data.listProjects.items : [];

  if (projects) {
    // Sort projects by date
    projects.sort((a, b) => {
      const dateA = a.date ? parseInt(a.date.replace(/-/g, ""), 10) : 0;
      const dateB = b.date ? parseInt(b.date.replace(/-/g, ""), 10) : 0;
      return dateB - dateA;
    });
  }

  return { projects: formatProjectsJson(projects) };
};

const addProject = (project, onComplete) => {
  const formattedProject = formatProjectInput(project);
  client
    .graphql({
      query: mutations.createProject,
      variables: { input: formattedProject },
      authMode: "userPool",
    })
    .then(({ data: { createProject } }) => onComplete(createProject));
};

const deleteProject = (projectId, onComplete) => {
  client
    .graphql({
      query: mutations.deleteProject,
      variables: { input: { id: projectId } },
      authMode: "userPool",
    })
    .then(() => {
      onComplete();
    });
};

const updateProject = async (project) => {
  const formattedProject: UpdateProjectInput = formatProjectInput(project);
  const { data } = await client.graphql({
    query: mutations.updateProject,
    variables: { input: formattedProject },
    authMode: "userPool",
  });

  return { project: data ? data.updateProject : data };
};

const formatProjectsJson = (projects = []) => {
  return projects.map((project) => {
    // Need to parse awsjson for each project
    const features = project.features
      ? project.features.map((featureSet) => {
          return formatJsonFromAws(featureSet);
        })
      : [];

    return {
      ...project,
      features,
    };
  });
};

const formatProjectInput = (args) => {
  const {
    id,
    description,
    internal,
    features,
    employer,
    client,
    // omit these fields
    tags,
    createdAt,
    updatedAt,
    __typename,
    ...approvedInputArgs
  } = args;
  const formattedInput: {
    id?: string;
    projectEmployerId?: string;
    projectClientId?: string;
    description?: string;
    internal?: string;
    features?: [];
  } = {};

  formattedInput.id = !id ? null : id;

  // not sure how to clear the values out
  if (employer && employer.id) {
    formattedInput.projectEmployerId = employer.id;
  }

  if (client && client.id) {
    formattedInput.projectClientId = client.id;
  }

  // if no description passed null to clear description else pass description
  formattedInput.description = !description ? null : description;

  // if no internal passed null to clear internal else pass internal
  formattedInput.internal = !internal ? null : internal;

  if (features) {
    formattedInput.features = features.map((feature) =>
      JSON.stringify(feature),
    );
  }

  return {
    ...approvedInputArgs,
    ...formattedInput,
  };
};

export { getProject, getProjects, addProject, deleteProject, updateProject };
