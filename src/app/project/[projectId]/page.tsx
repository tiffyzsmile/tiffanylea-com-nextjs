import React from "react";
import ProjectDetail from "@/components/ProjectDetail";
import projects from "@/data/projects";
import { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
  const project = projects.find((project) => project.id === params.projectId);

  return {
    title: `${project.name} - Tiffany Lea May`,
    openGraph: {
      images: project.images,
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}

type Props = {
  params: { projectId: string };
};

const ProjectPage = async ({ params }: Props) => {
  const project = projects.find((project) => project.id === params.projectId);

  return <ProjectDetail project={project} />;
};

export default ProjectPage;
