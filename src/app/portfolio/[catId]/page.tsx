import React from "react";
import Portfolio from "@/components/Portfolio";
import { getProjects } from "@/data/getProjects";

type Props = {
  params: { catId: string };
};

const PortfolioPage = async ({ params }: Props) => {
  const projects = await getProjects({}).then((projects) => projects);

  return <Portfolio catId={params.catId} projects={projects} />;
};

export default PortfolioPage;
