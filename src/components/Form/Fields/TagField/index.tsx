import React, { useEffect, useState } from "react";
import { Field } from "react-final-form";
import { TagType } from "@/types/project";
import { getGroupedTags } from "@/data/getTags";

type Props = {
  name: string;
  label?: string;
  category?: string;
  multiple?: boolean;
};

const TagField = ({
  name,
  label = "Tags",
  category = "all",
  multiple = false,
}: Props) => {
  const [groupedTags, setGroupedTags] = useState({});

  useEffect(() => {
    getGroupedTags().then(({ groupedTags }) => {
      setGroupedTags(groupedTags);
    });
  }, []);

  const tagsSubOptionList = (tags) =>
    tags
      // Sort list alphabetically by name
      .sort((a, b) => (a.name < b.name ? -1 : Number(a.name > b.name)))
      .map((e) => {
        if (category === "all" || category === e.category) {
          return (
            <option key={e.id} value={e.id}>
              {e.name}
            </option>
          );
        }
        return false;
      });
  const tagsOptionList = Object.keys(groupedTags).map((group) => {
    const categoryTags = tagsSubOptionList(groupedTags[group] || []);
    return (
      <optgroup key={group} label={group}>
        {categoryTags}
      </optgroup>
    );
  });

  return (
    <label htmlFor={name}>
      {label}
      <Field<TagType[]>
        id={name}
        name={name}
        component="select"
        type="select"
        multiple={multiple}
        size={multiple ? 15 : 1}
      >
        {tagsOptionList}
      </Field>
    </label>
  );
};

export default TagField;
