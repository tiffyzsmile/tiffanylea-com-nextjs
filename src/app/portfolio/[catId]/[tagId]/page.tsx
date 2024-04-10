import React from "react";
import Portfolio from "@/components/Portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Tiffany Lea May",
  description: "Web Development portfolio for Tiffany Lea May",
};

type Props = {
  params: { catId: string; tagId: string };
};

const PortfolioPage = async ({ params: { catId, tagId } }: Props) => {
  return <Portfolio catId={catId} tagId={tagId} />;
};

export default PortfolioPage;
