import * as query from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import { Amplify } from "aws-amplify";
import awsconfig from "@/aws-exports";
import { generateClient } from "aws-amplify/api";
import { Tag } from "@/API";

const getFormattedInput = ({ id, name, category, logo, display }) => {
  return { id, name, category, logo, display };
};

Amplify.configure(awsconfig, { ssr: true });
const client = generateClient();

const useTags = () => {
  const getTag = async (tagId) => {
    const { data } = await client.graphql({
      query: query.getTag,
      variables: { id: tagId },
      authMode: "userPool",
    });
    const tag = data ? data.getTag : data;
    return { tag: tag };
  };

  const getTags = async () => {
    const { data } = await client.graphql({
      query: query.listTags,
      variables: { limit: 500 },
      authMode: "userPool",
    });

    const tags = data ? data.listTags.items : null;
    return { tags: tags };
  };

  const getGroupedTags = async () => {
    const { tags = [] } = await getTags();
    const groupedData = {};
    tags.map((tagObj) => {
      const currentValues: Tag[] =
        tagObj.category && groupedData[tagObj.category]
          ? groupedData[tagObj.category]
          : [];
      groupedData[tagObj.category] = [...currentValues, tagObj];
      return false;
    });

    return { groupedTags: groupedData };
    // return { data: {} };
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

  const deleteTag = ({ tagId, onSuccess }) => {
    client
      .graphql({
        query: mutations.deleteTag,
        variables: { input: { id: tagId } },
        authMode: "userPool",
      })
      .then(() => onSuccess(tagId));
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

  return {
    getTag,
    getTags,
    getGroupedTags,
    addTag,
    deleteTag,
    updateTag,
  };
};

export default useTags;
