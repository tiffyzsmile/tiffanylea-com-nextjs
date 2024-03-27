import React from "react";
import Button from "@/components/Button";
import { Field } from "react-final-form";
import styles from "./FeaturesField.module.scss";

type Props = {
  name: string;
  remove: () => void;
};

const FeatureItem = ({ name, remove }: Props) => {
  return (
    <div className={styles.featureItem}>
      <Field className={styles.input} name={name} component="input" />
      <Button className={styles.removeButton} onClick={() => remove()}>
        x
      </Button>
    </div>
  );
};

export default FeatureItem;
