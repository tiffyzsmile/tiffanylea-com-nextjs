import React from "react";
import Portfolio from "@/components/Portfolio";
import { getProjects } from "@/utils/getProjects";

type Props = {
  params: { catId: string; tagId: string };
};

const PortfolioPage = async ({ params }: Props) => {
  const projects = await getProjects({}).then((projects) => projects);

  return (
    <Portfolio catId={params.catId} tagId={params.tagId} projects={projects} />
  );
};

export default PortfolioPage;
