import React from "react";
import { Field } from "react-final-form";
import S3FileUpload from "@/components/Form/Fields/S3FileUpload";

type Props = {
  label: string;
  name: string;
  folder: string;
};

const LogoField = ({
  label = "Logo:",
  name = "logo",
  folder = "logos/",
}: Props) => {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        <Field
          id={name}
          name={name}
          render={({ input }) => {
            return <S3FileUpload {...input} filePath={folder} alt={label} />;
          }}
        />
      </label>
    </div>
  );
};

export default LogoField;
