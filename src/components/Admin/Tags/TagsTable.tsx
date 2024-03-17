import React from "react";
import Link from "next/link";
import Button from "@/components/Button";
import { CategoryFilter } from "@/components/Form/Filters";
import categories from "@/data/categories";
import { Tag } from "@/API";

type Props = {
  tags: Tag[];
  onDelete: (tagId: string) => void;
  onCategoryChange: (newCategory: string | null) => void;
};

const TagsTable = ({ tags = [], onDelete, onCategoryChange }: Props) => {
  const tagsContent = (tagsArray) =>
    tagsArray.map((n) => {
      return (
        <tr key={n.id}>
          <td>{n.name}</td>
          <td>{categories[n.category]}</td>
          <td>
            {n.logo && (
              <img
                style={{ maxWidth: "25px", maxHeight: "25px" }}
                src={n.logo}
                alt={`Logo of ${n.name}`}
              />
            )}
          </td>
          <td className="center">
            <Link href={`/admin/tags/${n.id}`}>Edit</Link>
            <Button styleAs="link" onClick={() => onDelete(n.id)}>
              Delete
            </Button>
          </td>
        </tr>
      );
    });

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
      <tbody>{tagsContent(tags)}</tbody>
    </table>
  );
};

export default TagsTable;
