import React from "react";
import Button from "@/components/Button";
import styles from "./FeaturesField.module.scss";

type Props = {
  name: string;
  push: () => void;
  linkText?: string;
};
const AddFieldButton = ({ name, push, linkText = "add new" }: Props) => {
  return (
    <div key={name}>
      <Button
        className={styles.addButton}
        onClick={() => {
          push();
        }}
      >
        {linkText}
      </Button>
    </div>
  );
};

export default AddFieldButton;
