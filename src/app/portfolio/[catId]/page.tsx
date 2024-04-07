import React from "react";
import Portfolio from "@/components/Portfolio";
import { getProjects } from "@/data/getProjects";
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
  params: { catId: string };
};

const PortfolioPage = async ({ params: { catId } }: Props) => {
  const projects = await getProjects({}).then((projects) =>
    projects.filter((project) => {
      return project.display && project.tagsByCategory[catId];
    }),
  );
  return <Portfolio catId={catId} projects={projects} />;
};

export default PortfolioPage;
