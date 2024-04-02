import categories from "@/data/categories";
import { Project, TaggedProject } from "@/API";

const uniq = require("lodash/uniq");

const getTagsByCategory = (tags: TaggedProject[]) => {
  const tagsArray = tags.map((tag) => tag.tag);
  const tagsByCategory = {};
  // Sort list alphabetically by name
  const sortedTags = tagsArray.sort((a, b) =>
    a.name < b.name ? -1 : Number(a.name > b.name),
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

  const projectsWithTags = [...projects].map((project: Project) => {
    const projectCategories = [];
    const tags = [];
    const employer: EmployerType = {};
    const client: ClientType = {};
    if (project.tags.items.length) {
      project.tags.items.forEach((projectTag) => {
        tags.push(projectTag.tag.id);
        if (!projectCategories.includes(projectTag.tag.category)) {
          projectCategories.push(projectTag.tag.category);
        }
      });
    }

    const images = project.images.map((image) => {
      return {
        original: getCdnImage(image),
        originalAlt: project.name,
        thumbnail: getCdnImage(image),
      };
    });

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
    delete project.updatedAt; // eslint-disable-line
    delete project.createdAt; // eslint-disable-line
    delete project.display; // eslint-disable-line
    delete project.__typename; // eslint-disable-line

    const sortedTags = tags.sort((tag1, tag2) => tag1.localeCompare(tag2));
    return {
      ...project,
      tags: sortedTags,
      categories: projectCategories,
      tagsByCategory: getTagsByCategory(project.tags.items),
      images,
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
      .sort((a, b) => (a.name < b.name ? -1 : Number(a.name > b.name)))
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
