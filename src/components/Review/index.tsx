import React from "react";
import { H2, H3, Quote } from "@/components/Typography";
import Image from "next/image";
import styles from "./Review.module.scss";

type Props = {
  imageSrc: string;
  name: string;
  title: string;
  link: string;
  children: React.ReactNode;
};

const Review = ({ imageSrc, name, title, link, children }: Props) => {
  return (
    <article className={styles.review}>
      <div className={styles.imageContainer}>
        <Image
          alt={name}
          src={imageSrc}
          fill
          sizes="(min-width:630px) 188px, 93px"
        />
      </div>
      <header>
        <H2>{title}</H2>
        <H3>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </H3>
      </header>
      <Quote>{children}</Quote>
    </article>
  );
};

export default Review;
