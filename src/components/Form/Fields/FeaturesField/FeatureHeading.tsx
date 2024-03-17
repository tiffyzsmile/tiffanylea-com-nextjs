import React from "react";
import { Field } from "react-final-form";
import Button from "@/components/Button";

const styles = {
  arrayFieldWrap: {
    display: "flex",
  },
  arrayFieldInput: {
    marginBottom: "5px",
  },
  arrayFieldRemoveButton: {
    marginBottom: "5px",
    cursor: "pointer",
  },
};

type Props = {
  name: string;
  remove: () => void;
};

const FeatureHeading = ({ name, remove }: Props) => {
  return (
    <div style={styles.arrayFieldWrap}>
      <Field name={name} component="input" style={styles.arrayFieldInput} />
      <Button style={styles.arrayFieldRemoveButton} onClick={() => remove()}>
        x
      </Button>
    </div>
  );
};

export default FeatureHeading;
