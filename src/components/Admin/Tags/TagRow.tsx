import React from "react";
import Link from "next/link";
import Button from "@/components/Button";
import categories from "@/data/categories";
import { Tag } from "@/API";
import Image from "next/image";
import styles from "./Tags.module.css";

type Props = {
  tag: Tag;
  onDelete: (tagId: string) => void;
};

const TagRow = ({ tag, onDelete }: Props) => {
  return (
    <tr key={tag.id}>
      <td>{tag.name}</td>
      <td>{categories[tag.category]}</td>
      <td>
        <div className={styles.logo}>
          {tag.logo && (
            <Image fill src={tag.logo} alt={`Logo of ${tag.name}`} />
          )}
        </div>
      </td>
      <td className="center">
        <Link href={`/admin/tags/${tag.id}`}>Edit</Link>
        <Button styleAs="link" onClick={() => onDelete(tag.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default TagRow;
