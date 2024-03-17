import React from "react";
import Button from "@/components/Button";
import styles from "./S3FileUpload.module.scss";

type Props = {
  imageSrc: string;
  alt: string;
  onDeleteItem: (imageSrc) => void;
};

const Image = ({ imageSrc, alt, onDeleteItem }: Props) => {
  return (
    <>
      <img className={styles.image} src={imageSrc} alt={alt || ""} />
      <br />
      <Button styleAs="link" onClick={() => onDeleteItem(imageSrc)}>
        Delete
      </Button>
    </>
  );
};

export default Image;
