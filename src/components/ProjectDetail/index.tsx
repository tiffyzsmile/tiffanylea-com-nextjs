import React from "react";
import ImageGallery from "@/components/ImageGallery";
import { H1, H2 } from "@/components/Typography";
import { LocalProjectType } from "@/types/project";
import TagsByCategory from "./TagsByCategory";
import styles from "./ProjectDetail.module.scss";
import Image from "next/image";
import { getCdnImage } from "@/utils/aws";

type Props = {
  project: LocalProjectType;
};

const ProjectDetail = ({ project }: Props) => {
  const displayName = `${project.name} (${new Date(project.date).getFullYear()})`;

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
          alt={`${project.displayName} Screenshot`}
        />
      </section>
      <section className={styles.projectDetails}>
        <H1>{displayName}</H1>
        {project.description && (
          <div>
            <H2>Description</H2>
            {project.description}
          </div>
        )}

        {project.features && features}

        <H2>While Working For</H2>
        <div className={styles.whileWorkingFor}>
          {project.employer.name && (
            <Image
              alt={project.employer.name}
              src={getCdnImage(project.employer.logo)}
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
