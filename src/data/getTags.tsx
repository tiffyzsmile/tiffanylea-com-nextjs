import * as query from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import { Amplify } from "aws-amplify";
import awsconfig from "@/aws-exports";
import { generateClient } from "aws-amplify/api";
import { Tag } from "@/API";
import { GraphQLAuthMode } from "@aws-amplify/core/internals/utils";

const getFormattedInput = ({ id, name, category, logo, display }) => {
  return { id, name, category, logo, display };
};

Amplify.configure(awsconfig, { ssr: true });
const client = generateClient();

const getTag = async (tagId) => {
  const { data } = await client.graphql({
    query: query.getTag,
    variables: { id: tagId },
    authMode: "userPool",
  });
  const tag = data ? data.getTag : data;
  return { tag: tag };
};

const getTags = ({ authMode = "iam" }: { authMode?: GraphQLAuthMode }) => {
  return client
    .graphql({
      query: query.listTags,
      variables: { limit: 500 },
      authMode,
    })
    .then(({ data: { listTags } }) => listTags.items || []);
};

const getGroupedTags = async ({
  authMode = "iam",
}: {
  authMode?: GraphQLAuthMode;
}) => {
  const tags = await getTags({ authMode });
  const groupedTags = {};
  tags.map((tagObj) => {
    const currentValues: Tag[] =
      tagObj.category && groupedTags[tagObj.category]
        ? groupedTags[tagObj.category]
        : [];
    groupedTags[tagObj.category] = [...currentValues, tagObj];
    return false;
  });

  return groupedTags;
};

const addTag = ({ tag, onSuccess }) => {
  const formattedTag = getFormattedInput(tag);
  client
    .graphql({
      query: mutations.createTag,
      variables: { input: formattedTag },
      authMode: "userPool",
    })
    .then(({ data: { createTag } }) => onSuccess(createTag));
};

const deleteTag = (tag) => {
  const hasProjects = tag?.projects?.items.length > 0;
  return new Promise((resolve, reject) => {
    if (hasProjects) {
      reject("Before deleting remove all tags");
    } else {
      console.log("NOT RUNNING CODE");
      // client
      //   .graphql({
      //     query: mutations.deleteTag,
      //     variables: { input: { id: tag.id } },
      //     authMode: "userPool",
      //   })
      //   .then(() => tagId);
    }
  });
};

const updateTag = ({ tag, onSuccess }) => {
  const formattedTag = getFormattedInput(tag);
  client
    .graphql({
      query: mutations.updateTag,
      variables: { input: formattedTag },
      authMode: "userPool",
    })
    .then(({ data: { updateTag } }) => onSuccess(updateTag));
};

export { getTag, getTags, getGroupedTags, addTag, deleteTag, updateTag };
