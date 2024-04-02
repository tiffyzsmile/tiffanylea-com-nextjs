import React from "react";
import Portfolio from "@/components/Portfolio";

type Props = {
  params: { catId: string };
};

const PortfolioPage = ({ params }: Props) => {
  return <Portfolio catId={params.catId} />;
};

export default PortfolioPage;
