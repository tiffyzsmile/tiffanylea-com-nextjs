import React from "react";
import ImageGallery from "@/components/ImageGallery";
import { H1, H2 } from "@/components/Typography";
import { ProjectType } from "@/data/projects";
import TagsByCategory from "./TagsByCategory";
import styles from "./ProjectDetail.module.scss";
import Image from "next/image";

type Props = {
  project: ProjectType;
};

const ProjectDetail = ({ project }: Props) => {
  const features = project.features
    ? project.features.map((feature) => {
        const details =
          feature.items &&
          feature.items.map((detail) => {
            return <li key={detail}>{detail}</li>;
          });
        return (
          <div key={`key-${feature.heading}`}>
            {feature.heading && <H2>{feature.heading}</H2>}
            <ul>{details}</ul>
          </div>
        );
      })
    : [];

  return (
    <section className={styles.projectDetail}>
      <section className={styles.projectImages}>
        <ImageGallery
          showFullscreenButton
          images={project.images}
          showThumbnails={false}
        />
      </section>
      <section className={styles.projectDetails}>
        <H1>{project.displayName}</H1>
        {project.description && (
          <div>
            <H2>Description</H2>
            {project.description}
          </div>
        )}

        {project.features && features}

        <H2>While Working For</H2>
        <div className={styles.whileWorkingFor}>
          <Image alt={project.employer.name} src={project.employer.logo} fill />
        </div>
        <TagsByCategory tagsByCategory={project.tagsByCategory} />
      </section>
    </section>
  );
};

export default ProjectDetail;
