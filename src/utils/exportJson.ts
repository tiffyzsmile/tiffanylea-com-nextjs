import categories from "@/data/categories";
import { Project, TaggedProject } from "@/API";
import { LocalProjectType } from "@/types/project";

const uniq = require("lodash/uniq");

const getTagsByCategory = (tags: TaggedProject[]) => {
  const tagsArray = tags.map((tag) => tag.tag);
  const tagsByCategory = {};
  // Sort list alphabetically by name
  const sortedTags = tagsArray.sort((tag1, tag2) =>
    tag1.name.localeCompare(tag2.name),
  );
  uniq(sortedTags, "name").forEach((tag) => {
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

  // this may seem extreme, but we need to control the property key order
  // of the output so comparing json changes is easier, its not public facing
  // so performance doesn't matter as much as time to manually compare diffs
  const sortedCategoryNames = [...Object.keys(tagsByCategory)].sort();
  const sortedObjectKeys = {};
  sortedCategoryNames.forEach((category) => {
    sortedObjectKeys[category] = tagsByCategory[category];
  });
  return sortedObjectKeys;
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

const getProjectsJsonOutput = (projects) => {
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

  const projectsWithTags = projects.map((project: LocalProjectType) => {
    console.log("project", project);
    const projectCategories = [];

    const employer: EmployerType = {};
    const client: ClientType = {};

    if (project.employer) {
      employer.id = project.employer.id;
      employer.name = project.employer.name;
      employer.logo = getCdnImage(project.employer.logo);
    }

    if (project.client) {
      client.id = project.client.id;
      client.name = project.client.name;
      client.logo = getCdnImage(project.client.logo);
    }

    // format project name to include date
    const displayName = `${project.name} (${new Date(
      project.date,
    ).getFullYear()})`;

    // Remove other unneeded properties
    delete project.internal; // eslint-disable-line
    delete project.display; // eslint-disable-line

    // this may seem extreme, but we need to control the property key order
    // of the output so comparing json changes is easier, its not public facing
    // so performance doesn't matter as much as time to manually compare diffs
    const sortedCategoryNames = [...Object.keys(project.tagsByCategory)].sort();
    const sortedObjectKeys = {};
    sortedCategoryNames.forEach((category) => {
      sortedObjectKeys[category] = project.tagsByCategory[category];
    });

    return {
      ...project,
      tagsByCategory: sortedObjectKeys,
      tags: project.tags.sort((tag1, tag2) => tag1.localeCompare(tag2)),
      employer,
      client,
      logo: getCdnImage(project.logo),
      displayName,
    };
  });
  return projectsWithTags;
};

const getTagsJsonOutput = (tags) => {
  const tagsByCategory = {};
  // loop over categories and save out category specific tags
  Object.keys(categories).forEach((key) => {
    const categoryTags = [...tags]
      .filter((tag) => {
        return tag.category === key;
      })
      // Sort list alphabetically by name
      .sort((tag1, tag2) => tag1.name.localeCompare(tag2.name))
      .map((tag) => {
        return {
          id: tag.id,
          name: tag.name,
          category: tag.category,
        };
      });

    tagsByCategory[key] = {
      name: categories[key],
      tags: categoryTags,
    };
  });

  return tagsByCategory;
};

export { getProjectsJsonOutput, getTagsJsonOutput };
