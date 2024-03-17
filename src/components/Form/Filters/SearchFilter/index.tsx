import React from "react";

type Props = {
  onChange: (newValue: string) => void;
};

const SearchFilter = ({ onChange }: Props) => {
  return (
    <div>
      <input
        type="text"
        name="search"
        onChange={(e) => {
          onChange(e.currentTarget.value);
        }}
      />
    </div>
  );
};

export default SearchFilter;
