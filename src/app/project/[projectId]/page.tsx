import React from "react";
import ProjectDetail from "@/components/ProjectDetail";
import { getProject, getProjects } from "@/utils/getProjects";
import { formatProjectForLocal } from "@/utils/formatProjectForLocal";

export async function generateStaticParams() {
  const projects = await getProjects().then(({ projects }) =>
    projects.filter((project) => project.display),
  );

  return projects.map((project) => ({
    projectId: project.id,
  }));
}

type Props = {
  params: { projectId: string };
};

const ProjectPage = async ({ params }: Props) => {
  const project = await getProject(params.projectId).then(
    ({ project }) => project,
  );
  const formattedProject = formatProjectForLocal(project);

  return <ProjectDetail project={formattedProject} />;
};

export default ProjectPage;
