import React from "react";
import { H3 } from "@/components/Typography";
import Role from "./Role";
import styles from "./Employment.module.scss";

type Role = {
  duration: string;
  title: string;
  summary?: string;
  details: string[];
};

type Props = {
  name: string;
  location: string;
  duration: string;
  techUsed: string[];
  details?: string[];
  roles?: Role[];
};

const EmploymentItem = ({
  name,
  location,
  duration,
  techUsed,
  details = [],
  roles = [],
}: Props) => {
  const hasRoles = roles?.length > 0;

  const rolesOutput = roles.map((role) => {
    return <Role key={role.duration} {...role} />;
  });

  const detailsOutput = details.map((detail) => {
    return <li key={detail}>{detail}</li>;
  });

  return (
    <article className={styles.employer}>
      <p className={styles.date}>{duration}</p>
      <H3>{name}</H3>
      <p className={styles.location}>{location}</p>

      {hasRoles ? <>{rolesOutput}</> : <ul>{detailsOutput}</ul>}

      <p className={styles.tech}>{techUsed.join(", ")}</p>
    </article>
  );
};

export default EmploymentItem;
