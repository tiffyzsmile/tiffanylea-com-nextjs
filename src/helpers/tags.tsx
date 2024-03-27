import { Tag } from "@/API";

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

export { filterTagsByCategory };
