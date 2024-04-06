import React from "react";
import ProjectDetail from "@/components/ProjectDetail";
import { getProject, getProjects } from "@/utils/getProjects";

export async function generateStaticParams() {
  const projects = await getProjects({}).then((projects) =>
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
  const project = await getProject({ projectId: params.projectId }).then(
    (project) => project,
  );

  return <ProjectDetail project={project} />;
};

export default ProjectPage;
