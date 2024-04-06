import React from "react";
import Portfolio from "@/components/Portfolio";
import { getProjects } from "@/data/getProjects";

const PortfolioPage = async () => {
  const projects = await getProjects({});

  return <Portfolio pageProjects={projects} />;
};

export default PortfolioPage;
