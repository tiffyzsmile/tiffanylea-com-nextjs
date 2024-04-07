import React from "react";
import Portfolio from "@/components/Portfolio";

type Props = {
  params: { catId: string; tagId: string };
};

const PortfolioPage = async ({ params: { catId, tagId } }: Props) => {
  return <Portfolio catId={catId} tagId={tagId} />;
};

export default PortfolioPage;
