import React from "react";
import Portfolio from "@/components/Portfolio";
import { getProjects } from "@/data/getProjects";
import { getGroupedTags } from "@/data/getTags";

export async function generateStaticParams({
  params: { catId },
}: {
  params: { catId: string };
}) {
  const tags = await getGroupedTags().then((groupedTags) => {
    return groupedTags[catId];
  });

  return tags.map((tag) => ({
    tagId: tag.id,
  }));
}

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
