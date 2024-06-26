import React from "react";
import { CategoryFilter } from "@/components/Form/Filters";
import { Tag } from "@/API";
import TagRow from "@/components/Admin/Tags/TagRow";

type Props = {
  tags: Tag[];
  onCategoryChange: (newCategory: string | null) => void;
};

const TagsTable = ({ tags = [], onCategoryChange }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tag</th>
          <th>
            <CategoryFilter onCategoryChange={onCategoryChange} />
          </th>
          <th>Logo</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tags.map((tag) => (
          <TagRow key={tag.id} tag={tag} />
        ))}
      </tbody>
    </table>
  );
};

export default TagsTable;
