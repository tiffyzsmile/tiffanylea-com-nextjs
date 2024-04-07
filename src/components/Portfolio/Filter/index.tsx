import React from "react";
import FilterItem from "./FilterItem";
import styles from "./Filter.module.scss";
import tagsByCategory from "@/data/tags";

type TagType = {
  id: string;
  link: string;
  name: string | undefined;
  isCurrent: boolean;
  onClick: () => void;
};

type Props = {
  catId: string | null;
  tagId: string | null;
  setCatId: (catId: string) => void;
  setTagId: (tagId: string) => void;
};

const Filter = ({ catId, tagId, setCatId, setTagId }: Props) => {
  const visibleTags: TagType[] = [];
  if (catId) {
    visibleTags.push(
      {
        id: "go-back",
        link: "/portfolio",
        name: `<--- Go Back`,
        onClick: () => setCatId(null),
        isCurrent: false,
      },
      ...(
        tagsByCategory as unknown as {
          [key: string]: { tags: TagType[] };
        }
      )[catId as keyof {}]?.tags.map((tag) => {
        const isCurrent = tag.id === tagId;
        return {
          ...tag,
          link: "tagLink",
          onClick: () => setTagId(tag.id),
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
        onClick: () => setCatId(key),
        isCurrent: false, // current category isn't currently displayed
      });
    });
  }

  const content = visibleTags.map((t) => {
    return (
      <FilterItem
        key={t.id}
        id={t.id}
        link={t.link}
        name={t.name}
        isCurrent={t.isCurrent}
        onClick={t.onClick}
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
