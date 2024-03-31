"use client";
import React, { useEffect } from "react";
import Filter from "./Filter";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { H1 } from "../Typography";
import projects from "@/data/projects";
import PortfolioItem from "./PortfolioItem";
import styles from "./Portfolio.module.scss";
import Image from "next/image";

type Props = {
  selectedProjectId?: string;
};

const Portfolio = ({ selectedProjectId }: Props) => {
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const tag = searchParams.get("tag");

  useEffect(() => {
    if (selectedProjectId && document.getElementById(selectedProjectId)!) {
      document.getElementById(selectedProjectId)!.scrollIntoView();
    }
  }, [selectedProjectId]);

  const visibleProjects = projects.filter((project) => {
    if (!category) {
      return project;
    }
    if (!tag) {
      return project.tagsByCategory[category];
    }
    return project.tags.includes(tag);
  });

  const portfolioItems = visibleProjects.map((item, index) => {
    const projectDetail: React.ReactNode[] = [];
    let isCurrent = false;
    if (selectedProjectId === item.id) {
      isCurrent = true;
      projectDetail.push(
        <li key={`fullRow${item.id}`} className={styles.fullRow}>
          <PortfolioItem
            project={item as any}
            closeLink={`/portfolio${searchParams.toString()}`}
          />
        </li>,
      );
    }
    const link = isCurrent ? "/portfolio" : `/portfolio/${item.id}`;
    return (
      <React.Fragment key={item.id}>
        <li className={isCurrent ? styles.current : ""} id={item.id}>
          <Link href={link + searchParams.toString()}>
            {item.logo && (
              <Image
                alt={item.name}
                src={item.logo}
                height="200"
                width="200"
                loading={index < 5 ? "eager" : "lazy"}
                priority={index < 5}
              />
            )}
          </Link>
        </li>
        {projectDetail}
      </React.Fragment>
    );
  });

  return (
    <>
      <Filter category={category} tag={tag} />
      <section className={styles.portfolio}>
        <H1>Portfolio ({visibleProjects.length})</H1>
        <ul id="portfolio-list">{portfolioItems}</ul>
      </section>
    </>
  );
};

export default Portfolio;
