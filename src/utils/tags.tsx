import { Tag } from "@/API";
import categories from "@/data/categories";

const filterTagsByCategory = ({
  tags = [],
  category,
}: {
  tags: Tag[];
  category: string;
}) => {
  if (!category) {
    return tags;
  }
  const filteredTags = tags.filter((tag) => {
    if (category) {
      return tag.category === category;
    }
    return tag;
  });
  // Sort list alphabetically by name
  filteredTags.sort((a, b) => {
    const aName = a.name ? a.name : "a";
    const bName = b.name ? b.name : "b";
    return aName < bName ? -1 : Number(aName > bName);
  });
  return filteredTags;
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
export { filterTagsByCategory, getTagsByCategory };
