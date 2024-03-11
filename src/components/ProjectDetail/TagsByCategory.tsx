import React from "react";
import { H2, Strong } from "@/components/Typography";
import Link from "next/link";
import { TagsByCategoryType } from "@/data/projects";
import styles from "./ProjectDetail.module.scss";

type Props = {
  tagsByCategory: TagsByCategoryType;
};

const TagsByCategory = ({ tagsByCategory }: Props) => {
  const tagsByCategoryContent: React.ReactNode[] = [];
  Object.keys(tagsByCategory).forEach((categoryKey) => {
    const category = tagsByCategory[categoryKey];
    const tagList = category.tags.map((tag) => {
      // if tag is set to display link to listing page
      if (tag.display) {
        return (
          <li key={tag.id}>
            <Link href={`/portfolio?category=${category.id}&tag=${tag.id}`}>
              {tag.name}
            </Link>
          </li>
        );
      }
      // else just show the name with no link
      return <li key={tag.id}>{tag.name}</li>;
    });

    tagsByCategoryContent.push(
      <div className={styles.projectTags} key={category.id}>
        <Strong>{category.name}</Strong>
        <ul>{tagList}</ul>
      </div>,
    );
  });

  return (
    <div>
      <H2>Tags</H2>
      {tagsByCategoryContent}
    </div>
  );
};

export default TagsByCategory;
