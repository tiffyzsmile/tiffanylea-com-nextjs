import React from "react";
import styles from "./Typography.module.scss";

type Props = {
  children: React.ReactNode;
};

const H2 = ({ children }: Props) => {
  return <h2 className={styles.h2}>{children}</h2>;
};

export default H2;
