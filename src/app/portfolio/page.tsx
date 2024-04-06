import React from "react";
import Portfolio from "@/components/Portfolio";
import { getProjects } from "@/data/getProjects";

export function generateStaticParams() {
  return [
    {
      catId: null,
      tagId: null,
    },
  ];
}

const PortfolioPage = async () => {
  const projects = await getProjects({}).then((projects) => projects);

  return <Portfolio projects={projects} />;
};

export default PortfolioPage;
