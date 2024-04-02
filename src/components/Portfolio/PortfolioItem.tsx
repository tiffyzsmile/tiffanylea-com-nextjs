import React from "react";
import ImageGallery from "@/components/ImageGallery";
import { H1, H2 } from "@/components/Typography";
import Link from "next/link";
import styles from "./Portfolio.module.scss";

type FeatureType = {
  heading: string;
  items: string[];
};

type ImageType = {
  original: string;
  originalAlt: string;
  thumbnail: string;
};

type ProjectType = {
  features: FeatureType[];
  images: ImageType[];
  displayName: string;
  description: string;
  id: string;
};

type Props = {
  project: ProjectType;
};

const PortfolioItem = ({ project }: Props) => {
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
    <section className={styles.portfolioItem}>
      <section className={styles.portfolioImages}>
        <ImageGallery
          showFullscreenButton
          images={project.images}
          showThumbnails={false}
        />
      </section>
      <section className={styles.portfolioDetails}>
        <H1>{project.displayName}</H1>
        {project.description && (
          <div>
            <H2>Description</H2>
            {project.description}
          </div>
        )}

        {project.features && features}
      </section>
      <Link className={styles.seeMore} href={`/project/${project.id}`}>
        See Project
      </Link>
    </section>
  );
};

export default PortfolioItem;
