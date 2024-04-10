import React from "react";
import Portfolio from "@/components/Portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Tiffany Lea May",
  description: "Web Development portfolio for Tiffany Lea May",
};

type Props = {
  params: { catId: string };
};

const PortfolioPage = async ({ params: { catId } }: Props) => {
  return <Portfolio catId={catId} />;
};

export default PortfolioPage;
