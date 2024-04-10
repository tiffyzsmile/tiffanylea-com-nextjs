import React from "react";
import Portfolio from "@/components/Portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Tiffany Lea May",
  description: "Web Development portfolio for Tiffany Lea May",
};

const PortfolioPage = async () => {
  return <Portfolio />;
};

export default PortfolioPage;
