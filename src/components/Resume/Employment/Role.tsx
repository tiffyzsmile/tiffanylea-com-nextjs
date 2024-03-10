import React from "react";
import { H4 } from "@/components/Typography";
import styles from "./Employment.module.scss";

type Props = {
  title: string;
  duration: string;
  summary?: string;
  details: string[];
};

const Role = ({ title, duration, summary, details = [] }: Props) => {
  return (
    <article className={styles.role}>
      <p className={styles.date}>{duration}</p>
      <H4>{title}</H4>
      {summary && <p>{summary}</p>}
      <ul>
        {details.map((detail) => {
          return <li key={detail}>{detail}</li>;
        })}
      </ul>
    </article>
  );
};

export default Role;
