"use client";
import React, { useEffect, useState } from "react";
import useTags from "@/hooks/useTags";
import Link from "next/link";
import TagsTable from "./TagsTable";
import { filterTagsByCategory } from "@/helpers/tags";
import { Tag } from "@/API";

const AdminTags = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [filteredTags, setFilteredTags] = useState<Tag[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>(null);
  const { getTags, deleteTag } = useTags();

  useEffect(() => {
    getTags().then(({ tags }) => {
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

  const onDelete = (tagId) => {
    const onSuccess = (tagId) => {
      setTags((currentTags) => {
        return currentTags.filter((tag) => tag.id !== tagId);
      });
    };
    deleteTag({
      tagId,
      onSuccess,
    });
  };

  const onCategoryChange = (newCategory) => {
    setCurrentCategory(newCategory);
  };

  return (
    <div>
      <h1>Tags ({filteredTags.length})</h1>
      <div style={{ float: "right" }}>
        <Link href={`/admin/tags/add`}>Add Tag</Link>
      </div>
      <TagsTable
        tags={filteredTags}
        onDelete={onDelete}
        onCategoryChange={onCategoryChange}
      />
    </div>
  );
};

export default AdminTags;
