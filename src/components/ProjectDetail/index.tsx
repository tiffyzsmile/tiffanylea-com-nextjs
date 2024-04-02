import React from "react";
import ImageGallery from "@/components/ImageGallery";
import { H1, H2 } from "@/components/Typography";
import { LocalProjectType } from "@/data/projects";
import TagsByCategory from "./TagsByCategory";
import styles from "./ProjectDetail.module.scss";
import Image from "next/image";

type Props = {
  project: LocalProjectType;
};

const ProjectDetail = ({ project }: Props) => {
  const features = project.formattedFeatures
    ? project.formattedFeatures.map((feature) => {
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
          images={project.formattedImages}
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

        {project.formattedFeatures && features}

        <H2>While Working For</H2>
        <div className={styles.whileWorkingFor}>
          {project.employer.name && (
            <Image
              alt={project.employer.name}
              src={project.employer.logo}
              fill
            />
          )}
        </div>
        <TagsByCategory tagsByCategory={project.tagsByCategory} />
      </section>
    </section>
  );
};

export default ProjectDetail;
