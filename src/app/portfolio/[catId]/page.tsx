import React from "react";
import Portfolio from "@/components/Portfolio";

type Props = {
  params: { catId: string };
};

const PortfolioPage = async ({ params: { catId } }: Props) => {
  return <Portfolio catId={catId} />;
};

export default PortfolioPage;
