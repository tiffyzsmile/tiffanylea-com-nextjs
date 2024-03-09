import React from "react";
import styles from "./Typography.module.scss";

type Props = {
  children: React.ReactNode;
};

const Italic = ({ children }: Props) => {
  return <span className={styles.italic}>{children}</span>;
};

export default Italic;
