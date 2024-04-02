import React from "react";
import FilterItem from "./FilterItem";
import styles from "./Filter.module.scss";
import tagsByCategory from "@/data/tags";

type TagType = {
  id: string;
  link: string;
  name: string | undefined;
  isCurrent: boolean;
};

type Props = {
  category: string | null;
  tag: string | null;
};

const Filter = ({ category, tag }: Props) => {
  const visibleTags: TagType[] = [];
  if (category) {
    visibleTags.push(
      {
        id: "go-back",
        link: "/portfolio",
        name: `<--- Go Back`,
        isCurrent: false,
      },
      ...(
        tagsByCategory as unknown as {
          [key: string]: { tags: TagType[] };
        }
      )[category as keyof {}]?.tags.map((t) => {
        const isCurrent = t.id === tag;
        const tagLink = isCurrent
          ? `/portfolio/${category}` // if current tag make link unselect tag
          : `/portfolio/${category}/${t.id}`; // else have link go to tag
        return {
          ...t,
          link: tagLink,
          isCurrent,
        };
      }),
    );
  } else {
    Object.keys(tagsByCategory).forEach((key) => {
      visibleTags.push({
        id: key,
        link: `/portfolio/${key}`,
        name: (
          tagsByCategory as unknown as {
            [key: string]: TagType;
          }
        )[key as keyof {}]?.name,
        isCurrent: false, // current category isn't currently displayed
      });
    });
  }

  const content = visibleTags.map((t) => {
    return (
      <FilterItem
        key={t.id}
        link={t.link}
        name={t.name}
        isCurrent={t.isCurrent}
      />
    );
  });

  return (
    <section className={styles.portfolioFilter}>
      <nav>
        <ul>{content}</ul>
      </nav>
    </section>
  );
};

export default Filter;
