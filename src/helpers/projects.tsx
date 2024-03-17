import categories from "@/data/categories";
import { formatDateForAWS, formatJsonFromAws } from "@/helpers/forms";

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

// create a better structured array of projects
// for easier access to tags and categories
const formatProjectsWithTagsAndCategories = (projects) => {
  const projectsWithTags = projects.map((project) => {
    const projectCategories = [];
    const tags = [];
    if (project.tags.items.length) {
      project.tags.items.forEach((projectTag) => {
        tags.push(projectTag.tag.id);
        if (!projectCategories.includes(projectTag.tag.category)) {
          projectCategories.push(projectTag.tag.category);
        }
      });
    }
    return { ...project, tags, categories: projectCategories };
  });
  return projectsWithTags;
};

const formatProjectTagsByCategory = (tags) => {
  // const tagsByCategory = [];
  const tagCategories = [];
  // get array of categories
  tags.forEach((projectTag) => {
    if (!tagCategories.includes(projectTag.tag.category)) {
      tagCategories.push(projectTag.tag.category);
    }
  });
  const projectTags = tagCategories.map((category) => {
    const catTags = tags
      .filter((tag, index, self) => {
        // return if tag is not in current category
        if (tag.tag.category !== category) {
          return false;
        }

        // This is super slow but I don't have time for this right now
        // It is limiting array of object tags to unique values based on id
        // This won't be a problem if I ensure things are only tagged once
        return self.map((x) => x.tag.id).indexOf(tag.tag.id) === index;
      })
      .map((tag) => {
        return { name: tag.tag.name, id: tag.tag.id, display: tag.tag.display };
      });

    const uCatTags = Array.from(new Set(catTags));
    return {
      category: categories[category],
      categoryId: category,
      tags: uCatTags,
    };
  });
  return projectTags;
};

export {
  formatProjectsJson,
  formatProjectInput,
  formatProjectsWithTagsAndCategories,
  formatProjectTagsByCategory,
};
