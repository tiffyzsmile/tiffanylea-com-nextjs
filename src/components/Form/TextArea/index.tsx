import React from "react";
import styles from "./TextArea.module.scss";
import Label from "@/components/Form/Label";

type Props = {
  id: string;
  label: string;
  register: any;
  placeholder: string;
  error: string;
  refProp: () => void;
};

const TextArea = ({
  register,
  id,
  label,
  placeholder = "",
  error = null,
  errorMessages = {},
  refProp = () => {},
}: Props) => {
  return (
    <Label name={id} label={label} error={error ? true : false}>
      {error && <span>{errorMessages[error]}</span>}
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        name={id}
        ref={refProp}
      />
    </Label>
  );
};

export default TextArea;
