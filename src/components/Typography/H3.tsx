import React from "react";
import styles from "./Typography.module.scss";

type Props = {
  children: React.ReactNode;
};

const H3 = ({ children }: Props) => {
  return <h3 className={styles.h3}>{children}</h3>;
};

export default H3;
