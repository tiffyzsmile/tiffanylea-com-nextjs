import React from "react";
import Portfolio from "@/components/Portfolio";
import { getProjects } from "@/data/getProjects";

export const dynamic = "force-static";

const PortfolioPage = async () => {
  const projects = await getProjects({}).then((projects) =>
    projects.filter((project) => project.display),
  );

  return <Portfolio projects={projects} />;
};

export default PortfolioPage;
