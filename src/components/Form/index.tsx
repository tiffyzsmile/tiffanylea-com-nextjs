import React from "react";
import "./styles.scss";

// This file is mainly used to import form styles
type Props = {
  children: React.ReactNode;
};

const Form = ({ children }: Props) => {
  return <>{children}</>;
};

export default Form;
