import React from "react";
import { FieldArray } from "react-final-form-arrays";
import FeatureItems from "./FeatureItems";
import FeatureHeading from "./FeatureHeading";
import AddFieldButton from "./AddFieldButton";

type Props = {
  name: string;
  label?: string;
};

const FeaturesField = ({ label = "Features:", name = "features" }: Props) => {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        <FieldArray name={name}>
          {({ fields }) => {
            const featuresContent = fields.map((featureSet, i) => (
              <div key={`${featureSet}.heading`}>
                <FeatureHeading
                  name={`${featureSet}.heading`}
                  remove={() => fields.remove(i)}
                />
                <FeatureItems name={`${featureSet}.items`} />
              </div>
            ));
            return (
              <div>
                <AddFieldButton
                  name="addNewFeatureSet"
                  push={() => fields.push({})}
                  linkText="Add New Set"
                />
                {featuresContent}
              </div>
            );
          }}
        </FieldArray>
      </label>
    </div>
  );
};

export default FeaturesField;
