import React from "react";
import Portfolio from "@/components/Portfolio";
import { getProjects } from "@/data/getProjects";

type Props = {
  params: { catId: string; tagId: string };
};

const PortfolioPage = async ({ params: { catId, tagId } }: Props) => {
  const projects = await getProjects({}).then((projects) =>
    projects.filter((project) => {
      return project.display && project.tags.includes(tagId);
    }),
  );

  return <Portfolio catId={catId} tagId={tagId} projects={projects} />;
};

export default PortfolioPage;
