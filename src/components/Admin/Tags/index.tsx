"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import TagsTable from "./TagsTable";
import { filterTagsByCategory } from "@/utils/tags";
import { Tag } from "@/API";
import { getTags } from "@/data/getTags";

const AdminTags = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [filteredTags, setFilteredTags] = useState<Tag[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>(null);

  useEffect(() => {
    getTags({ authMode: "userPool" }).then((tags) => {
      setTags(tags as Tag[]);
    });
  }, []);

  useEffect(() => {
    const newTags = filterTagsByCategory({
      tags: tags,
      category: currentCategory,
    });
    setFilteredTags(newTags);
  }, [currentCategory, tags]);

  const onCategoryChange = (newCategory) => {
    setCurrentCategory(newCategory);
  };

  return (
    <div>
      <h1>Tags ({filteredTags.length})</h1>
      <div style={{ float: "right" }}>
        <Link href={`/admin/tags/add`}>Add Tag</Link>
      </div>
      <TagsTable tags={filteredTags} onCategoryChange={onCategoryChange} />
    </div>
  );
};

export default AdminTags;
