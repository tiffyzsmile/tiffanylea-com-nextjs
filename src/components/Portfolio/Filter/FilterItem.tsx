import React from "react";
import Link from "next/link";
import styles from "./Filter.module.scss";

type Props = {
  link: string;
  id: string;
  name: string | undefined;
  isCurrent: boolean;
  onClick: () => void;
};

const FilterItem = ({ id, name, isCurrent, onClick }: Props) => {
  return (
    <li>
      <button onClick={onClick} className={isCurrent ? styles.current : ""}>
        {name}
      </button>
    </li>
  );
};

export default FilterItem;
