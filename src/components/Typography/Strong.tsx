import React from "react";
import styles from "./Typography.module.scss";

type Props = {
  children: React.ReactNode;
};

const Strong = ({ children }: Props) => {
  return <span className={styles.strong}>{children}</span>;
};

export default Strong;
