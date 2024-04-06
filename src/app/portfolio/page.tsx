import React from "react";
import Portfolio from "@/components/Portfolio";
import { getProjects } from "@/utils/getProjects";

const PortfolioPage = async () => {
  const projects = await getProjects({}).then((projects) => projects);

  return <Portfolio projects={projects} />;
};

export default PortfolioPage;
