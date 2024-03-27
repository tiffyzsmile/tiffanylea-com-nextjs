import React from "react";
import { Field } from "react-final-form";
import S3FileUpload from "@/components/Form/Fields/S3FileUpload";
import Label from "@/components/Form/Label";

type Props = {
  folder: string;
};

const LogoField = ({ folder = "logos/" }: Props) => {
  const name = "logo";
  return (
    <Label name={name} label="Logo:">
      <Field<string>
        id={name}
        name={name}
        render={({ input }) => {
          return (
            <S3FileUpload
              {...input}
              filePath={folder}
              alt="Logo"
              multiple={false}
            />
          );
        }}
      />
    </Label>
  );
};

export default LogoField;
