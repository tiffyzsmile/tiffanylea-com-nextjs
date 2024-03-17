import React from "react";
import Button from "@/components/Button";
import { Field } from "react-final-form";

const styles = {
  arrayFieldWrap: {
    display: "flex",
    marginLeft: "15px",
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

const FeatureItem = ({ name, remove }: Props) => {
  return (
    <div style={styles.arrayFieldWrap}>
      <Field style={styles.arrayFieldInput} name={name} component="input" />
      <Button style={styles.arrayFieldRemoveButton} onClick={() => remove()}>
        x
      </Button>
    </div>
  );
};

export default FeatureItem;
