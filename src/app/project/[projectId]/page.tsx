import React from "react";
import projects from "@/data/projects";
import ProjectDetail from "@/components/ProjectDetail";

type Props = {
  params: { projectId: string };
};

const ProjectPage = ({ params }: Props) => {
  const portfolioItem = projects.filter(
    (project) => project.id === params.projectId,
  )[0];

  return <ProjectDetail project={portfolioItem} />;
};

export default ProjectPage;
