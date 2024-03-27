import React from "react";
import { FieldArray } from "react-final-form-arrays";
import AddFieldButton from "./AddFieldButton";
import FeatureItem from "./FeatureItem";

type Props = {
  name: string;
};

const FeatureItems = ({ name }: Props) => {
  return (
    <FieldArray name={name} key={name}>
      {({ fields }) => {
        const itemFields = fields.map((item, index) => (
          <FeatureItem
            name={item}
            key={item}
            remove={() => fields.remove(index)}
          />
        ));
        return (
          <div>
            {itemFields}
            <AddFieldButton
              name={`addNewFeatureItem${name}`}
              push={() => fields.push("")}
              linkText="Add New Item"
            />
          </div>
        );
      }}
    </FieldArray>
  );
};

export default FeatureItems;
