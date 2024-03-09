import React from "react";
import styles from "./Typography.module.scss";

type Props = {
  children: React.ReactNode;
};

const Quote = ({ children }: Props) => {
  return <blockquote className={styles.quote}>{children}</blockquote>;
};

export default Quote;
