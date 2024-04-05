import * as query from "@/graphql/queries";
import { formatJsonFromAws } from "@/helpers/forms";
import { generateClient } from "aws-amplify/api";
import * as mutations from "@/graphql/mutations";

import { Amplify } from "aws-amplify";
import awsconfig from "@/aws-exports";
import { UpdateProjectInput } from "@/API";
import { GraphQLAuthMode } from "@aws-amplify/core/internals/utils";

// when we do serverside rendering for public website
// Amplify.configure(awsconfig, { ssr: true }); // also set     authMode: "iam",
Amplify.configure(awsconfig);
const client = generateClient();

const getProject = ({
  projectId,
  authMode = "iam",
}: {
  projectId: string;
  authMode?: GraphQLAuthMode;
}) => {
  return client
    .graphql({
      query: query.getProject,
      variables: { id: projectId },
      authMode,
    })
    .then(
      ({ data: { getProject } }) => formatProjectFromAws(getProject) || null,
    );
};

const getProjects = ({ authMode = "iam" }: { authMode?: GraphQLAuthMode }) => {
  return client
    .graphql({
      query: query.listProjects,
      variables: { limit: 500 },
      authMode,
    })
    .then(
      ({ data: { listProjects } }) =>
        formatProjectsFromAws(listProjects.items) || [],
    );
};

const addProject = (project) => {
  const formattedProject = formatProjectToAws(project);
  return client
    .graphql({
      query: mutations.createProject,
      variables: { input: formattedProject },
      authMode: "userPool",
    })
    .then(({ data: { createProject } }) => createProject);
};

const deleteProject = (project) => {
  const hasTags = project?.tags?.items.length > 0;
  return new Promise((resolve, reject) => {
    if (hasTags) {
      reject("Before deleting remove all tags");
    } else {
      return client.graphql({
        query: mutations.deleteProject,
        variables: { input: { id: project.id } },
        authMode: "userPool",
      });
    }
  });
};

const updateProject = (project) => {
  const formattedProject: UpdateProjectInput = formatProjectToAws(project);
  return client
    .graphql({
      query: mutations.updateProject,
      variables: { input: formattedProject },
      authMode: "userPool",
    })
    .then(({ data: { updateProject } }) => updateProject);
};

const formatProjectFromAws = (project) => {
  // Need to parse awsjson for project features
  const features = project.features
    ? project.features.map((featureSet) => {
        return formatJsonFromAws(featureSet);
      })
    : [];

  return {
    ...project,
    features,
  };
};

const formatProjectsFromAws = (projects = []) => {
  return projects
    .sort((a, b) => {
      const dateA = a.date ? parseInt(a.date.replace(/-/g, ""), 10) : 0;
      const dateB = b.date ? parseInt(b.date.replace(/-/g, ""), 10) : 0;
      return dateB - dateA;
    })
    .map((project) => formatProjectFromAws(project));
};

const formatProjectToAws = (project) => {
  const {
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
  } = project;
  const formattedInput: {
    projectEmployerId?: string;
    projectClientId?: string;
    description?: string;
    internal?: string;
    features?: [];
  } = {};

  formattedInput.projectEmployerId = employer?.id || null;
  formattedInput.projectClientId = client?.id || null;
  // if no value... pass null to clear field
  formattedInput.description = description || null;
  formattedInput.internal = internal || null;

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
