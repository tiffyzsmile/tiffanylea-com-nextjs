import React from "react";
import Link from "next/link";
import Button from "@/components/Button";
import categories from "@/data/categories";
import { Tag } from "@/API";
import Image from "next/image";
import styles from "./Tags.module.css";

type Props = {
  tag: Tag;
};

const TagRow = ({ tag }: Props) => {
  return (
    <tr key={tag.id}>
      <td>
        <Link href={`/admin/tags/${tag.id}`}>{tag.name}</Link>
      </td>
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
      </td>
    </tr>
  );
};

export default TagRow;
