import * as query from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import { Amplify } from "aws-amplify";
import awsconfig from "@/aws-exports";
import { generateClient } from "aws-amplify/api";
import { CreateTaggedProjectInput, UpdateTaggedProjectInput } from "@/API";

const getFormattedCreateInput = ({ projectId, tagId }) => {
  const formattedInput: CreateTaggedProjectInput = {
    taggedProjectProjectId: projectId,
    taggedProjectTagId: tagId,
  };

  return formattedInput;
};
const getFormattedUpdateInput = ({ id, projectId, tagId }) => {
  const formattedInput: UpdateTaggedProjectInput = {
    taggedProjectProjectId: projectId,
    taggedProjectTagId: tagId,
    id,
  };

  return formattedInput;
};

Amplify.configure(awsconfig);
const client = generateClient();

const getTaggedProject = (taggedProjectId) => {
  // const { loading, data, error } = useQuery(gql(getTaggedProjectQuery), {
  //   variables: { id: taggedProjectId },
  // });
  //
  // const taggedProject = data ? data.getTaggedProject : data;
  // return { loading, data: taggedProject, error };
};

const getTaggedProjects = async ({ nextToken = null }) => {
  const { data } = await client.graphql({
    query: query.listTaggedProjects,
    variables: { limit: 500, nextToken: nextToken },
    authMode: "userPool",
  });

  const taggedProjects = data ? data.listTaggedProjects.items : [];
  const nextNextToken = data ? data.listTaggedProjects.nextToken : null;
  return { taggedProjects: taggedProjects, nextNextToken: nextNextToken };
};

const addTaggedProject = ({ taggedProject, onSuccess }) => {
  const formattedTaggedProject = getFormattedCreateInput(taggedProject);
  client
    .graphql({
      query: mutations.createTaggedProject,
      variables: { input: formattedTaggedProject },
      authMode: "userPool",
    })
    .then(({ data: { createTaggedProject } }) => {
      console.log("createTaggedProject", createTaggedProject);
      onSuccess(createTaggedProject);
    });
};

const deleteTaggedProject = ({ taggedProjectId, onSuccess }) => {
  client
    .graphql({
      query: mutations.deleteTaggedProject,
      variables: { input: { id: taggedProjectId } },
      authMode: "userPool",
    })
    .then(({ data }) => {
      onSuccess(data.deleteTaggedProject);
    });
};

const updateTaggedProject = ({ taggedProject, onSuccess }) => {
  const formattedTaggedProject = getFormattedUpdateInput(taggedProject);
  client
    .graphql({
      query: mutations.updateTaggedProject,
      variables: { input: formattedTaggedProject },
      authMode: "userPool",
    })
    .then(({ data }) => {
      console.log("UPDATE SUCCESS", data);
      onSuccess(data ? data.updateTaggedProject : data);
    });
};

export {
  getTaggedProject,
  getTaggedProjects,
  addTaggedProject,
  deleteTaggedProject,
  updateTaggedProject,
};
