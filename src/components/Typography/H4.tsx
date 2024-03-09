import React from "react";
import styles from "./Typography.module.scss";

type Props = {
  children: React.ReactNode;
};

const H4 = ({ children }: Props) => {
  return <h4 className={styles.h4}>{children}</h4>;
};

export default H4;
