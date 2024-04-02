import React from "react";
import Portfolio from "@/components/Portfolio";

type Props = {
  params: { catId: string; tagId: string };
};

const PortfolioPage = ({ params }: Props) => {
  return <Portfolio catId={params.catId} tagId={params.tagId} />;
};

export default PortfolioPage;
