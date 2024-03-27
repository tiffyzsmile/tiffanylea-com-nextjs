import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import styles from "@/components/Form/Fields/S3FileUpload/S3FileUpload.module.scss";
import Button from "@/components/Button";

type Props = {
  imageSrc: string;
  alt?: string;
  onDeleteItem: (imageSrc) => void;
};

const SortableImage = ({ imageSrc, alt, onDeleteItem }: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: imageSrc });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div key={imageSrc} ref={setNodeRef} style={style}>
      <img
        {...listeners}
        {...attributes}
        className={styles.image}
        src={imageSrc}
        alt={alt || ""}
      />
      <br />
      <Button styleAs="link" onClick={() => onDeleteItem(imageSrc)}>
        Delete
      </Button>
    </div>
  );
};

export default SortableImage;
