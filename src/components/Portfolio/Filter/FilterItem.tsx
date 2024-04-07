import React from "react";
import Link from "next/link";
import styles from "./Filter.module.scss";

type Props = {
  link: string;
  name: string | undefined;
  isCurrent: boolean;
};

const FilterItem = ({ link, name, isCurrent }: Props) => {
  return (
    <li>
      <Link href={link} className={isCurrent ? styles.current : ""}>
        {name}
      </Link>
    </li>
  );
};

export default FilterItem;
