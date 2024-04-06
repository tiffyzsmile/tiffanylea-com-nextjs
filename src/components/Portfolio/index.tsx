"use client";
import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import { H1 } from "../Typography";
import PortfolioItem from "./PortfolioItem";
import styles from "./Portfolio.module.scss";
import Image from "next/image";
import { LocalProjectType } from "@/types/project";
import { getProjects } from "@/data/getProjects";

type Props = {
  catId?: string;
  tagId?: string;
};

const Portfolio = ({ catId, tagId }: Props) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects({}).then((projects) => setProjects(projects));
  }, []);

  const visibleProjects = projects.filter((project) => {
    if (!catId) {
      return project;
    }
    if (!tagId) {
      return project.tagsByCategory[catId];
    }
    return project.tags.includes(tagId);
  });

  const portfolioItems = visibleProjects.map((item, index) => {
    const projectDetail: React.ReactNode[] = [];
    let isCurrent = false;
    if (selectedProjectId === item.id) {
      isCurrent = true;
      projectDetail.push(
        <li key={`fullRow${item.id}`} className={styles.fullRow}>
          <PortfolioItem project={item as any} />
        </li>,
      );
    }

    return (
      <React.Fragment key={item.id}>
        <li className={isCurrent ? styles.current : ""} id={item.id}>
          <a
            role="button"
            onClick={() => {
              setSelectedProjectId((curVal) =>
                curVal === item.id ? null : item.id,
              );
            }}
          >
            {item.logo && (
              <Image
                alt={item.name}
                src={item.logo}
                height="200"
                width="200"
                loading={index < 5 ? "eager" : "lazy"}
                priority={index === 0}
              />
            )}
          </a>
        </li>
        {projectDetail}
      </React.Fragment>
    );
  });

  return (
    <>
      <Filter category={catId} tag={tagId} />
      <section className={styles.portfolio}>
        <H1>Portfolio ({visibleProjects.length})</H1>
        <ul id="portfolio-list">{portfolioItems}</ul>
      </section>
    </>
  );
};

export default Portfolio;
