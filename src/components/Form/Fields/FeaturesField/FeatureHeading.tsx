import React from "react";
import { Field } from "react-final-form";
import Button from "@/components/Button";
import styles from "./FeaturesField.module.scss";

type Props = {
  name: string;
  remove: () => void;
};

const FeatureHeading = ({ name, remove }: Props) => {
  return (
    <div className={styles.featureHeading}>
      <Field
        name={name}
        component="input"
        className={styles.featureHeadingInput}
      />
      <Button
        className={styles.featureHeadingRemoveButton}
        onClick={() => remove()}
      >
        x
      </Button>
    </div>
  );
};

export default FeatureHeading;
