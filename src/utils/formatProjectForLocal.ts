import { formatJsonFromAws } from "@/utils/aws";
import { GetProjectQuery } from "@/API";
import { LocalProjectType } from "@/types/project";
import categories from "@/data/categories";

// This updates link to use cloudfront distribution url
// See: https://github.com/aws-amplify/amplify-console/issues/330
const getCdnImage = (url) => {
  if (url) {
    return url.replace(
      "tiffanylea-com-content20191210135709-master.s3.us-west-2.amazonaws.com", // eslint-disable-line
      "d3oyz6uk1t3qpy.cloudfront.net",
    );
  }
  return url;
};

const getTagsByCategory = (tags) => {
  const tagsArray = tags.map((tag) => tag.tag);
  const tagsByCategory = {};
  // Sort list alphabetically by name
  const sortedTags = tagsArray.sort((tag1, tag2) =>
    tag1.name.localeCompare(tag2.name),
  );
  sortedTags.forEach((tag) => {
    const tagOutput = {
      id: tag.id,
      name: tag.name,
      display: tag.display,
    };
    if (tagsByCategory[tag.category]) {
      tagsByCategory[tag.category].tags.push(tagOutput);
    } else {
      tagsByCategory[tag.category] = {
        id: tag.category,
        name: categories[tag.category],
        tags: [tagOutput],
      };
    }
  });

  return tagsByCategory;
};

type EmployerType = {
  id?: string;
  name?: string;
  logo?: string;
};
type ClientType = {
  id?: string;
  name?: string;
  logo?: string;
};

const formatImages = (images, alt) => {
  return images.map((image) => {
    return {
      original: getCdnImage(image),
      originalAlt: alt,
      thumbnail: getCdnImage(image),
    };
  });
};

const formatFeatures = (features = []) => {
  return features?.map((feature) => {
    // Need to parse awsjson
    return formatJsonFromAws(feature);
  });
};

const formatDisplayName = (name, date) => {
  return `${name} (${new Date(date).getFullYear()})`;
};

const formatTags = (tags) => {
  return tags.map((tag) => tag.tag.id);
};

const formatEmployer = (employer) => {
  return {
    id: employer.id,
    name: employer.name,
    logo: getCdnImage(employer.logo),
  };
};
const formatClient = (client) => {
  return {
    id: client.id,
    name: client.name,
    logo: getCdnImage(client.logo),
  };
};

const formatProjectForLocal = (projectInput: GetProjectQuery["getProject"]) => {
  const {
    employer: origEmployer,
    client: origClient,
    tags: origTags,
    ...includeOriginalProjectProperties
  } = projectInput;

  const displayName = formatDisplayName(projectInput.name, projectInput.date);
  const formattedImages = formatImages(projectInput.images, projectInput.name);
  const formattedFeatures = formatFeatures(projectInput.features);
  const tagsByCategory = getTagsByCategory(projectInput.tags.items);
  const tags = formatTags(projectInput.tags.items);
  const employer: EmployerType = formatEmployer(projectInput.employer);
  const client: ClientType = formatClient(projectInput.client);

  const project: LocalProjectType = {
    ...includeOriginalProjectProperties,
    displayName,
    formattedFeatures,
    formattedImages,
    tagsByCategory,
    tags,
    employer,
    client,
  };

  return project;
};

export { formatProjectForLocal };
