import * as query from "@/graphql/queries";
import {
  formatDateForAWS,
  formatDateFromAWS,
  formatJsonFromAws,
} from "@/helpers/forms";
import { generateClient } from "aws-amplify/api";
import * as mutations from "@/graphql/mutations";

import { Amplify } from "aws-amplify";
import awsconfig from "@/aws-exports";
import { Project } from "@/API";

// when we do serverside rendering for public website
// Amplify.configure(awsconfig, { ssr: true }); // also set     authMode: "iam",
Amplify.configure(awsconfig);
const client = generateClient();

const getProject = async (projectId): Promise<{ project: Project }> => {
  const { data } = await client.graphql({
    query: query.getProject,
    variables: { id: projectId },
    authMode: "userPool",
  });

  const project = data ? data.getProject : data;

  // Need to convert aws format 'yyyy-mm-dd' back to date object for react-datepicker
  if (project && project.date) {
    project.date = formatDateFromAWS(project.date);
  }

  // Need to parse awsjson
  if (project && project.features) {
    project.features = project.features.map((feature) => {
      return formatJsonFromAws(feature);
    });
  }
  return { project: project };
};

const getProjects = async () => {
  const { data } = await client.graphql({
    query: query.listProjects,
    variables: { limit: 500 },
    authMode: "userPool",
  });

  const projects = data ? data.listProjects.items : [];

  if (projects) {
    // Sort projects by date
    projects.sort((a, b) => {
      const dateA = parseInt(a.date.replace(/-/g, ""), 10);
      const dateB = parseInt(b.date.replace(/-/g, ""), 10);
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
  const formattedProject = formatProjectInput(project);
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

const formatProjectInput = ({
  id,
  name,
  date,
  description,
  internal,
  features,
  display,
  url,
  logo,
  images,
  employer,
  client,
}) => {
  const formattedInput: {
    id: string;
    projectEmployerId: string;
    projectClientId: string;
    description: string;
    internal: string;
    date: string;
    features: [];
  } = {};

  if (id) {
    formattedInput.id = id;
  }

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

  if (date) {
    formattedInput.date = formatDateForAWS(date);
  }

  if (features) {
    formattedInput.features = features.map((feature) =>
      JSON.stringify(feature),
    );
  }

  return {
    name,
    features,
    display,
    url,
    logo,
    images,
    ...formattedInput,
  };
};

export { getProject, getProjects, addProject, deleteProject, updateProject };
