import React from "react";
import Button from "@/components/Button";

const styles = {
  arrayFieldAddButton: {
    marginBottom: "25px",
    cursor: "pointer",
    marginLeft: "15px",
  },
};

type Props = {
  name: string;
  push: () => void;
  linkText?: string;
};
const AddFieldButton = ({ name, push, linkText = "add new" }: Props) => {
  return (
    <div key={name}>
      <Button
        type="button"
        style={styles.arrayFieldAddButton}
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
