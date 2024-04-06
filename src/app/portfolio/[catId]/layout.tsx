import React from "react";
import { getGroupedTags } from "@/data/getTags";

export async function generateStaticParams() {
  const categories = await getGroupedTags().then((groupedTags) =>
    Object.keys(groupedTags),
  );

  return categories.map((category) => ({
    catId: category,
  }));
}

type Props = {
  children: React.ReactNode;
};

const CatIdLayout = ({ children }: Props) => {
  return children;
};

export default CatIdLayout;
