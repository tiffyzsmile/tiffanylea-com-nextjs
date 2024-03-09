import React from "react";
import styles from "./Typography.module.scss";

type Props = {
  children: React.ReactNode;
};

const H1 = ({ children }: Props) => {
  return <h1 className={styles.h1}>{children}</h1>;
};

export default H1;
